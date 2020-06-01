const { AuthenticationError } = require('apollo-server-express');
const authService = require('../services/auth.service');
const encryptService = require('../services/encrypt.service');
const User = require('../models/User.model');
const toTitleCase = require('../util/toTitleCase');

const UserMutations = {
  async createUser(_, { full_name, username, email_address, password }) {
    const account = await User.create({
      full_name: toTitleCase(full_name),
      username: username.toLowerCase(),
      password,
      email_address: email_address.toLowerCase(),
    });

    const token = authService().issue({ account });

    return {
      token,
      user: account,
    };
  },

  async login(_, { username, password }) {
    const account = await User.findOne({
      where: {
        username: username.toLowerCase(),
      },
    });

    if (!account) throw new AuthenticationError('Account not found.');
    if (!encryptService().comparePassword(password, account.password))
      throw new AuthenticationError('Invalid Username / Password. Please Try Again.');

    const token = authService().issue({ account });
    return {
      token,
      user: account,
    };
  },

  async updateUserDetails(_, { email_address, full_name }, { user }) {
    if (!user) throw new AuthenticationError('You are not logged in.');

    const result = await User.update(
      { email_address, full_name: toTitleCase(full_name) },
      { where: { id: user.account.id }, returning: true, plain: true },
    );

    const account = result[1];

    const token = authService().issue({ account });

    return {
      token,
      user: account,
    };
  },

  async updatePassword(_, { old_password, new_password }, { user }) {
    if (!user) throw new AuthenticationError('You are not logged in.');

    const account = await User.findOne({ where: { id: user.account.id } });
    if (!account) throw new AuthenticationError('Account not found');

    if (!encryptService().comparePassword(old_password, account.password))
      throw new AuthenticationError('Invalid Password. Please try again.');

    account.password = new_password;
    const password = encryptService().generatePassword(account);
    account.update({ password });

    const token = authService().issue({ account });

    return {
      token,
      user: account,
    };
  },
};

module.exports = { UserMutations };
