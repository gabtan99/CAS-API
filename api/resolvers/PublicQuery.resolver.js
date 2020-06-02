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
  search: async (_, { keyword, user_limit = 2, quiz_limit = 3 }) => {
    const quiz_results = await Quiz.findAll({
      where: {
        is_public: true,
        is_active: true,
        title: { [Op.iLike]: '%' + keyword + '%' },
      },
      order: [['id', 'DESC']],
      raw: true,
    });

    const user_results = await User.findAll({
      where: {
        [Op.or]: {
          username: { [Op.iLike]: '%' + keyword + '%' },
          full_name: { [Op.iLike]: '%' + keyword + '%' },
        },
      },
    });

    const has_more_quizzes = !!quiz_results[quiz_limit];
    const has_more_users = !!user_results[quiz_limit];
    const quizzes = quiz_results.slice(0, quiz_limit - 1);
    const users = user_results.slice(0, user_limit - 1);

    return {
      quizzes,
      users,
      has_more_quizzes,
      has_more_users,
    };
  },
};

module.exports = { PublicQuery };
