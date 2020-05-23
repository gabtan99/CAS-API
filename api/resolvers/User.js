const { quizzes } = require('./sample');

const User = {
  quizzes: (_, { id }) => quizzes.find((quiz) => quiz.user_id == id),
};

module.exports = {
  User,
};
