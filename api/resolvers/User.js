const { quizzes } = require('./sample');

const User = {
  quizzes: (parent) => quizzes.filter(({ user_id }) => parent.id == user_id),
};

module.exports = {
  User,
};
