const User = require('../models/User');
const Quiz = require('../models/Quiz');

const Bookmark = {
  user: (parent) => User.findOne({ where: { id: parent.user_id } }, { raw: true }),
  quiz: (parent) => Quiz.findOne({ where: { id: parent.quiz_id } }, { raw: true }),
};

module.exports = {
  Bookmark,
};
