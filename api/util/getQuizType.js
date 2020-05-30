const QuizType = require('../models/QuizType.model');

const getQuizType = async (str) => {
  const title = capitalize(str.toLowerCase());
  return await QuizType.findOne({ where: { title } }, { raw: true });
};

const capitalize = (s) => {
  if (typeof s !== 'string') return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
};

module.exports = getQuizType;
