const QuizType = require('../models/QuizType');
const Set = require('../models/Set');
const Attempt = require('../models/Attempt');

const Quiz = {
  quiz_type: (parent) => QuizType.findByPk(parent.type_id, { raw: true }),
  sets: (parent) => Set.findAll({ where: { quiz_id: parent.id } }, { raw: true }),
  attempts: (parent) => Attempt.findAll({ where: { quiz_id: parent.id } }, { raw: true }),
};

module.exports = {
  Quiz,
};
