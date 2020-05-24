const { quizzes } = require('./sample');
const User = require('../models/User');
const Quiz = require('../models/Quiz');
const QuizType = require('../models/QuizType');

const Query = {
  user: (_, { id }) => User.findByPk(id, { raw: true }),
  users: () => User.findAll(),
  quiz: (_, { id }) => Quiz.findByPk(id, { raw: true }),
  quizzes: () => Quiz.findAll(),
  quiz_types: () => QuizType.findAll(),
};

module.exports = { Query };
