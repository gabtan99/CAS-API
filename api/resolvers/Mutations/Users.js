const authService = require('../../services/auth.service');
const User = require('../../models/User');

const users = {
  async register(parent, args, context) {
    let user, token;
    const { full_name, username, email_address, password } = args;

    try {
      user = await User.create({
        full_name,
        username: username.toLowerCase(),
        password,
        email_address: email_address.toLowerCase(),
      });

      token = authService().issue({
        user,
      });
    } catch (err) {}

    return {
      token,
      user,
    };
  },
};

module.exports = { users };
