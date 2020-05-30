const { Query } = require('../api/resolvers/Query.resolver');
const { User } = require('../api/resolvers/User.resolver');
const { Quiz } = require('../api/resolvers/Quiz.resolver');
const { Attempt } = require('../api/resolvers/Attempt.resolver');
const { Bookmark } = require('../api/resolvers/Bookmark.resolver');
const { UserMutations } = require('../api/mutations/User.mutation');
const { QuizMutations } = require('../api/mutations/Quiz.mutation');
const { BookmarkMutations } = require('../api/mutations/Bookmark.mutation');
const { AttemptMutations } = require('../api/mutations/Attempt.mutation');

module.exports = {
  Query,
  Mutation: {
    ...UserMutations,
    ...QuizMutations,
    ...BookmarkMutations,
    ...AttemptMutations,
  },
  User,
  Quiz,
  Attempt,
  Bookmark,
};
