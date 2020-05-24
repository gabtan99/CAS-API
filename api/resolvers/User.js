const Quiz = require('../models/Quiz');

const User = {
  quizzes: (parent) => Quiz.findAll({ where: { user_id: parent.id } }, { raw: true }),
};

module.exports = {
  User,
};
