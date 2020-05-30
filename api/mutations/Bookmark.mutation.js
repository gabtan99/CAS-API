const Bookmark = require('../models/Bookmark.model');

const BookmarkMutations = {
  async createBookmark(_, { quiz_id }, { user }) {
    if (!user) throw new AuthenticationError('You must be logged in to bookmark a quiz.');

    const result = await Bookmark.create({ quiz_id, user_id: user.account.id });

    return result;
  },
};

module.exports = { BookmarkMutations };
