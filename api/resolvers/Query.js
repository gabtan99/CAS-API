const { users, quizzes } = require('./sample');
const User = require('../models/User');

const Query = {
  user: (_, { id }) => User.findByPk(id, { raw: true }),
  users: () => User.findAll(),
  quiz: (_, { id }) => quizzes.find((quiz) => quiz.id == id),
  quizzes: () => quizzes,
};

module.exports = { Query };
