const authService = require('../../services/auth.service');
const encryptService = require('../../services/encrypt.service');
const User = require('../../models/User');

const UserMutations = {
  async createUser(_, { full_name, username, email_address, password }) {
    const account = await User.create({
      full_name,
      username: username.toLowerCase(),
      password,
      email_address: email_address.toLowerCase(),
    });

    const token = authService().issue({
      account,
    });

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

    if (!account) throw Error('No Account');
    if (!encryptService().comparePassword(password, account.password))
      throw Error('Wrong password');

    const token = authService().issue({ account });
    return {
      token,
      user: account,
    };
  },
};

module.exports = { UserMutations };