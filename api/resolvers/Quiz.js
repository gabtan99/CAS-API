const QuizType = require('../models/QuizType');
const Flashcard = require('../models/Flashcard');
const Attempt = require('../models/Attempt');
const Bookmark = require('../models/Bookmark');

const Quiz = {
  quiz_type: (parent) => QuizType.findByPk(parent.type_id, { raw: true }),
  flashcards: (parent) => Flashcard.findAll({ where: { quiz_id: parent.id } }, { raw: true }),
  flashcards_count: (parent) => Flashcard.count({ where: { quiz_id: parent.id } }, { raw: true }),
  attempts: (parent) => Attempt.findAll({ where: { quiz_id: parent.id } }, { raw: true }),
  bookmarks_count: (parent) => Bookmark.count({ where: { quiz_id: parent.id } }, { raw: true }),
};

module.exports = {
  Quiz,
};
