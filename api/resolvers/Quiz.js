const { sets, attempts, types } = require('./sample');
const QuizType = require('../models/QuizType');
const Set = require('../models/Set');

const Quiz = {
  type: (parent) => QuizType.findByPk(parent.type_id, { raw: true }),
  sets: (parent) => Set.findAll({ where: { quiz_id: parent.id } }, { raw: true }),
  attempts: (parent) => attempts.filter(({ quiz_id }) => parent.id == quiz_id),
};

module.exports = {
  Quiz,
};
