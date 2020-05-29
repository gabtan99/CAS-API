const { Query } = require('./Query');
const { UserMutations } = require('./Mutations/User.mutation');
const { User } = require('./User');
const { Quiz } = require('./Quiz');
const { Attempt } = require('./Attempt');
const { Bookmark } = require('./Bookmark');

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
