const User = require('../models/User.model');
const Quiz = require('../models/Quiz.model');
const QuizType = require('../models/QuizType.model');

const PublicQuery = {
  me: (_, __, { user }) => (user ? user.account : null),
  user: (_, { id }) => User.findByPk(id, { raw: true }),
  users: () => User.findAll(),
  quiz: (_, { id }) => Quiz.findOne({ where: { id, is_public: true } }, { raw: true }),
  quizzes: () => Quiz.findAll({ where: { is_public: true, is_active: true } }, { raw: true }),
  quiz_type: (_, { id }) => QuizType.findByPk(id, { raw: true }),
  quiz_types: () => QuizType.findAll(),
};

module.exports = { PublicQuery };
