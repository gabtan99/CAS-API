const QuizType = require('../models/QuizType.model');
const toTitleCase = require('./toTitleCase');

const getQuizType = async (str) => {
  const title = toTitleCase(str);
  return await QuizType.findOne({ where: { title } }, { raw: true });
};

module.exports = getQuizType;
