const { Query } = require('./Query');
const { Users } = require('./Mutations/Users');
// const { post } = require('./Mutation/post');
const { User } = require('./User');
const { Quiz } = require('./Quiz');
const { Attempt } = require('./Attempt');

module.exports = {
  Query,
  Mutation: {
    ...Users,
    // ...Quiz,
  },
  User,
  Quiz,
  Attempt,
};
