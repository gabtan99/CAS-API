const Quiz = require('../models/Quiz.model');
const Bookmark = require('../models/Bookmark.model');
const getPaginatedPayload = require('../util/getPaginatePayload');

const User = {
  quizzes: async ({ id }, { conditions }) => {
    const { sort_column = 'id', sort_order = 'DESC', keyword = '', limit = 5, cursor } = conditions;

    const results = await Quiz.findAll({
      where: {
        is_public: true,
        is_active: true,
        user_id: id,
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

module.exports = {
  User,
};
