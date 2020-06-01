const Quiz = require('../models/Quiz.model');
const Bookmark = require('../models/Bookmark.model');

const User = {
  quizzes: ({ id }) => Quiz.findAll({ where: { user_id: id } }),
  bookmarks: ({ id }) => Bookmark.findAll({ where: { user_id: id } }),
};

module.exports = {
  User,
};
