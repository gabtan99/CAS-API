const Quiz = require('../models/Quiz.model');
const Bookmark = require('../models/Bookmark.model');

const User = {
  quizzes: (parent) => Quiz.findAll({ where: { user_id: parent.id } }, { raw: true }),
  bookmarks: (parent) => Bookmark.findAll({ where: { user_id: parent.id } }, { raw: true }),
};

module.exports = {
  User,
};
