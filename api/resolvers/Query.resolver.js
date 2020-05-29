const User = require('../models/User.model');
const Quiz = require('../models/Quiz.model');
const QuizType = require('../models/QuizType.model');
const Attempt = require('../models/Attempt.model');
const Bookmark = require('../models/Bookmark.model');

const Query = {
  me: (_, __, { user }) => (user ? user.account : null),
  user: (_, { id }) => User.findByPk(id, { raw: true }),
  users: () => User.findAll(),
  quiz: (_, { id }) => Quiz.findOne({ where: { id, is_public: true } }, { raw: true }),
  quizzes: () => Quiz.findAll({ where: { is_public: true, is_active: true } }, { raw: true }),
  quiz_type: (_, { id }) => QuizType.findByPk(id, { raw: true }),
  quiz_types: () => QuizType.findAll(),
  attempt: (_, { id }) => Attempt.findByPk(id, { raw: true }),
  attempts: () => Attempt.findAll(),
  bookmarks: (_, { id }, { user }) =>
    Bookmark.findAll({ where: { user_id: id || user ? user.account.id : null } }, { raw: true }),
};

module.exports = { Query };
