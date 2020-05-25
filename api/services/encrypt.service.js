const bcrypt = require('bcrypt-nodejs');

const encryptService = () => {
  const generatePassword = (user) => {
    const salt = bcrypt.genSaltSync();
    const hash = bcrypt.hashSync(user.password, salt);

    return hash;
  };

  const comparePassword = (pw, hash) => bcrypt.compareSync(pw, hash);

  return {
    generatePassword,
    comparePassword,
  };
};

module.exports = encryptService;
