const bcrypt = require('bcrypt-nodejs');

const encryptService = () => {
  const password = (user) => {
    const salt = bcrypt.genSaltSync();
    const hash = bcrypt.hashSync(user.password, salt);

    return hash;
  };

  const comparePassword = (pw, hash) => bcrypt.compareSync(pw, hash);

  return {
    password,
    comparePassword,
  };
};

module.exports = encryptService;
