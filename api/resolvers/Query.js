const { quizzes } = require('./sample');
const User = require('../models/User');
const Quiz = require('../models/Quiz');

const Query = {
  user: (_, { id }) => User.findByPk(id, { raw: true }),
  users: () => User.findAll(),
  quiz: (_, { id }) => Quiz.findByPk(id, { raw: true }),
  quizzes: () => Quiz.findAll(),
};

module.exports = { Query };
