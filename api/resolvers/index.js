const { Query } = require('./Query');
// const { auth } = require('./Mutation/auth');
// const { post } = require('./Mutation/post');
const { User } = require('./User');
const { Quiz } = require('./Quiz');
const { Attempt } = require('./Attempt');

module.exports = {
  Query,
  //   Mutation: {
  //     ...auth,
  //     ...Quiz,
  //   },
  User,
  Quiz,
  Attempt,
};
