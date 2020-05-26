const { Query } = require('./Query');
const { UserMutations } = require('./Mutations/User.mutation');
// const { post } = require('./Mutation/post');
const { User } = require('./User');
const { Quiz } = require('./Quiz');
const { Attempt } = require('./Attempt');

module.exports = {
  Query,
  Mutation: {
    ...UserMutations,
    // ...Quiz,
  },
  User,
  Quiz,
  Attempt,
};
