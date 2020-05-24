const { users, quizzes } = require('./sample');

const Attempt = {
  user: (parent) => users.find(({ id }) => parent.user_id == id),
  quiz: (parent) => quizzes.find(({ id }) => parent.quiz_id == id),
};

module.exports = {
  Attempt,
};
