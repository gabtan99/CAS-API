const { AuthenticationError } = require('apollo-server-express');
const Attempt = require('../models/Attempt.model');
const Bookmark = require('../models/Bookmark.model');

const PrivateQuery = {
  me: (_, __, { user }) => (user ? user.account : null),
  attempts: (_, { quiz_id }, { user }) => {
    if (!user) throw new AuthenticationError('You must be logged in to view your quiz attempts.');

    return Attempt.findAll({ where: { quiz_id, user_id: user.account.id } });
  },
  bookmarks: (_, __, { user }) => {
    if (!user) throw new AuthenticationError('You must be logged in to view your bookmarks.');

    return Bookmark.findAll({ where: { user_id: user.account.id } });
  },
};

module.exports = { PrivateQuery };
