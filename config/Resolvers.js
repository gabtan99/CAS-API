const { Query } = require('../api/resolvers/Query.resolver');
const { User } = require('../api/resolvers/User.resolver');
const { Quiz } = require('../api/resolvers/Quiz.resolver');
const { Attempt } = require('../api/resolvers/Attempt.resolver');
const { Bookmark } = require('../api/resolvers/Bookmark.resolver');
const { UserMutations } = require('../api/mutations/User.mutation');

module.exports = {
  Query,
  Mutation: {
    ...UserMutations,
    // ...Quiz,
  },
  User,
  Quiz,
  Attempt,
  Bookmark,
};
