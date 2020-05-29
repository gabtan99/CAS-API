const QuizType = require('../models/QuizType.model');
const Flashcard = require('../models/Flashcard.model');
const Attempt = require('../models/Attempt.model');
const Bookmark = require('../models/Bookmark.model');

const Quiz = {
  quiz_type: (parent) => QuizType.findByPk(parent.type_id, { raw: true }),
  flashcards: (parent) => Flashcard.findAll({ where: { quiz_id: parent.id } }, { raw: true }),
  flashcards_count: (parent) => Flashcard.count({ where: { quiz_id: parent.id } }, { raw: true }),
  attempts: (parent) => Attempt.findAll({ where: { quiz_id: parent.id } }, { raw: true }),
  attempts_count: (parent) => Attempt.count({ where: { quiz_id: parent.id } }, { raw: true }),
  bookmarks_count: (parent) => Bookmark.count({ where: { quiz_id: parent.id } }, { raw: true }),
};

module.exports = {
  Quiz,
};
