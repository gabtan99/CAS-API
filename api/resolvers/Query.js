const { users, quizzes } = require('./sample');

const Query = {
  user: (_, { id }) => users.find((user) => user.id == id),
  users: () => users,
  quiz: (_, { id }) => quizzes.find((quiz) => quiz.id == id),
  quizzes: () => quizzes,
};

module.exports = { Query };
