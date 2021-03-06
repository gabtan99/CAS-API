const User = require('../models/User.model');
const Quiz = require('../models/Quiz.model');

const Attempt = {
  user: (parent) => User.findOne({ where: { id: parent.user_id } }),
  quiz: (parent) => Quiz.findOne({ where: { id: parent.quiz_id } }),
};

module.exports = {
  Attempt,
};
