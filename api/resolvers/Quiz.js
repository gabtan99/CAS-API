const { sets, attempts, types } = require('./sample');

const Quiz = {
  type: (parent) => types.find(({ id }) => parent.type_id == id),
  sets: (parent) => sets.filter(({ quiz_id }) => parent.id == quiz_id),
  attempts: (parent) => attempts.filter(({ quiz_id }) => parent.id == quiz_id),
};

module.exports = {
  Quiz,
};
