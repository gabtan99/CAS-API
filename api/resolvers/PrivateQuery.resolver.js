const { AuthenticationError } = require('apollo-server-express');
const { Op } = require('sequelize');
const Attempt = require('../models/Attempt.model');
const Bookmark = require('../models/Bookmark.model');
const Quiz = require('../models/Quiz.model');
const getPaginatedPayload = require('../util/getPaginatePayload');

const PrivateQuery = {
  me: (_, __, { user }) => (user ? user.account : null),
  bookmarks: (_, __, { user }) => {
    if (!user) throw new AuthenticationError('You must be logged in to view your bookmarks.');

    return Bookmark.findAll({ where: { user_id: user.account.id } });
  },
  attempts_history: async (_, { conditions }, { user }) => {
    if (!user) throw new AuthenticationError('You must be logged in to view your quiz attempts.');
    const { sort_column = 'id', sort_order = 'DESC', limit = 5, cursor } = conditions;

    const results = await Attempt.findAll({
      where: { user_id: user.account.id },
      order: [[sort_column, sort_order]],
      raw: true,
    });

    const { data, nextCursor } = getPaginatedPayload(results, limit, cursor);

    return {
      attempts: data,
      cursor: nextCursor,
    };
  },
  bookmarked_quizzes: async (_, { conditions }, { user }) => {
    if (!user) throw new AuthenticationError('You must be logged in to view your bookmarks.');
    const { sort_column = 'id', sort_order = 'DESC', keyword = '', limit = 5, cursor } = conditions;

    let bookmark_ids = await Bookmark.findAll({
      where: { user_id: user.account.id },
      attributes: ['quiz_id'],
    });

    bookmark_ids = bookmark_ids.map((o) => o.quiz_id);

    const results = await Quiz.findAll({
      where: {
        id: bookmark_ids,
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
  recent_quizzes: async (_, { conditions }, { user }) => {
    if (!user) throw new AuthenticationError('You must be logged in to view your recent quizzes.');
    const { sort_column = 'id', sort_order = 'DESC', keyword = '', limit = 5, cursor } = conditions;

    let attempt_ids = await Attempt.findAll({
      where: { user_id: user.account.id },
      attributes: ['quiz_id'],
    });

    attempt_ids = attempt_ids.map((o) => o.quiz_id);

    const results = await Quiz.findAll({
      where: {
        id: attempt_ids,
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
  my_quizzes: async (_, { conditions }, { user }) => {
    if (!user) throw new AuthenticationError('You must be logged in to view your recent quizzes.');
    const { sort_column = 'id', sort_order = 'DESC', keyword = '', limit = 5, cursor } = conditions;

    const results = await Quiz.findAll({
      where: {
        user_id: user.account.id,
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

module.exports = { PrivateQuery };
