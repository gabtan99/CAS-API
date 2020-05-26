const { Query } = require('./Query');
const { UserMutations } = require('./Mutations/UserMutations');
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
