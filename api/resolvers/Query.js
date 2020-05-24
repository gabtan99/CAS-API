const User = require('../models/User');
const Quiz = require('../models/Quiz');
const QuizType = require('../models/QuizType');
const Attempt = require('../models/Attempt');

const Query = {
  user: (_, { id }) => User.findByPk(id, { raw: true }),
  users: () => User.findAll(),
  quiz: (_, { id }) => Quiz.findByPk(id, { raw: true }),
  quizzes: () => Quiz.findAll(),
  quiz_type: (_, { id }) => QuizType.findByPk(id, { raw: true }),
  quiz_types: () => QuizType.findAll(),
  attempt: (_, { id }) => Attempt.findByPk(id, { raw: true }),
  attempts: () => Attempt.findAll(),
};

module.exports = { Query };
