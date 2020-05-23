const { users } = require('./sample');

const Query = {
  user: (_, { id }) => users.find((user) => user.id == id),
  users: () => users,
  quiz: () => {},
  quizzes: () => quizzes,
};

module.exports = { Query };
