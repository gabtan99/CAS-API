const User = require('../models/User');
const Quiz = require('../models/Quiz');
const QuizType = require('../models/QuizType');
const Attempt = require('../models/Attempt');
const Bookmark = require('../models/Bookmark');

const Query = {
  me: (_, __, { user }) => (user ? user.account : null),
  user: (_, { id }) => User.findByPk(id, { raw: true }),
  users: () => User.findAll(),
  quiz: (_, { id }) => Quiz.findByPk(id, { raw: true }),
  quizzes: () => Quiz.findAll(),
  quiz_type: (_, { id }) => QuizType.findByPk(id, { raw: true }),
  quiz_types: () => QuizType.findAll(),
  attempt: (_, { id }) => Attempt.findByPk(id, { raw: true }),
  attempts: () => Attempt.findAll(),
  bookmarks: (_, { id }, { user }) =>
    Bookmark.findAll({ where: { user_id: id || user ? user.account.id : null } }, { raw: true }),
};

module.exports = { Query };
