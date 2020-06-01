const User = require('../models/User.model');
const Quiz = require('../models/Quiz.model');
const QuizType = require('../models/QuizType.model');

const PublicQuery = {
  user: (_, { id }) => User.findByPk(id),
  users: () => User.findAll(),
  quiz: (_, { id }) => Quiz.findOne({ where: { id, is_public: true } }),
  quizzes: () => Quiz.findAll({ where: { is_public: true, is_active: true } }),
  quiz_type: (_, { id }) => QuizType.findByPk(id),
  quiz_types: () => QuizType.findAll(),
};

module.exports = { PublicQuery };
