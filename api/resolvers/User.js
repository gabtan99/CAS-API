const Quiz = require('../models/Quiz');
const Bookmark = require('../models/Bookmark');

const User = {
  quizzes: (parent) => Quiz.findAll({ where: { user_id: parent.id } }, { raw: true }),
  bookmarks: (parent) => Bookmark.findAll({ where: { user_id: parent.id } }, { raw: true }),
};

module.exports = {
  User,
};
