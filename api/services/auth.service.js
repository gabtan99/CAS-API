const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET;

const authService = () => {
  const issue = (payload) => jwt.sign(payload, JWT_SECRET, { expiresIn: 10800 });

  const getUser = (header) => {
    let user = null;
    try {
      const token = header.replace('Bearer ', '');
      user = jwt.verify(token, JWT_SECRET);
    } catch (error) {}
    return { user };
  };

  return {
    getUser,
    issue,
  };
};

module.exports = authService;
