const { Op } = require('sequelize');
const User = require('../models/User.model');
const Quiz = require('../models/Quiz.model');
const QuizType = require('../models/QuizType.model');
const getPaginatedPayload = require('../util/getPaginatePayload');

const PublicQuery = {
  user: (_, { id }) => User.findByPk(id),
  users: () => User.findAll(),
  quiz: (_, { id }) => Quiz.findOne({ where: { id, is_public: true } }),
  quiz_type: (_, { id }) => QuizType.findByPk(id),
  quiz_types: () => QuizType.findAll(),
  quizzes: async (_, { conditions }) => {
    const { sort_column = 'id', sort_order = 'DESC', keyword = '', limit = 5, cursor } = conditions;

    const results = await Quiz.findAll({
      where: {
        is_public: true,
        is_active: true,
        title: { [Op.iLike]: '%' + keyword + '%' },
      },
      order: [[sort_column, sort_order]],
      raw: true,
    });

    const { data, nextCursor } = getPaginatedPayload(results, limit, cursor);

    return {
      quizzes: data,
      cursor: nextCursor,
    };
  },
};

module.exports = { PublicQuery };
