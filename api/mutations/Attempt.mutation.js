const Attempt = require('../models/Attempt.model');

const AttemptMutations = {
  async createAttempt(_, { quiz_id, user_score, max_score }, { user }) {
    if (!user) throw new AuthenticationError('You must be logged in to take a quiz.');

    const result = Attempt.create({ quiz_id, user_score, max_score, user_id: user.account.id });

    return result;
  },
};

module.exports = { AttemptMutations };
