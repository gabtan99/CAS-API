const QuizType = require('../models/QuizType.model');
const Flashcard = require('../models/Flashcard.model');
const Attempt = require('../models/Attempt.model');
const Bookmark = require('../models/Bookmark.model');

const Quiz = {
  quiz_type: ({ type_id }) => QuizType.findByPk(type_id),
  flashcards: ({ id }) => Flashcard.findAll({ where: { quiz_id: id } }),
  flashcards_count: ({ id }) => Flashcard.count({ where: { quiz_id: id } }),
  attempts: ({ id }) => Attempt.findAll({ where: { quiz_id: id } }),
  attempts_count: ({ id }) => Attempt.count({ where: { quiz_id: id } }),
  bookmarks_count: ({ id }) => Bookmark.count({ where: { quiz_id: id } }),
  leaderboard: ({ id }, { limit = 10 }) =>
    Attempt.findAll({ where: { quiz_id: id }, limit, order: [['user_score', 'DESC']] }),
};

module.exports = {
  Quiz,
};
