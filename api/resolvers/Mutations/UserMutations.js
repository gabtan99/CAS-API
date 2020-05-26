const authService = require('../../services/auth.service');
const User = require('../../models/User');

const UserMutations = {
  async createUser(_, { full_name, username, email_address, password }) {
    let account, token;

    try {
      account = await User.create({
        full_name,
        username: username.toLowerCase(),
        password,
        email_address: email_address.toLowerCase(),
      });

      token = authService().issue({
        account,
      });
    } catch (err) {
      console.log(err);
    }

    return {
      token,
      user: account,
    };
  },
};

module.exports = { UserMutations };
