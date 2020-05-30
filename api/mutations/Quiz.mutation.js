const { AuthenticationError, UserInputError } = require('apollo-server-express');
const Quiz = require('../models/Quiz.model');
const Flashcard = require('../models/Flashcard.model');
const getQuizType = require('../util/getQuizType');

const QuizMutations = {
  async createQuiz(_, { title, description, quiz_type, is_public, flashcards }, { user }) {
    if (!user) throw new AuthenticationError('You must be logged in to add a quiz.');

    const type = await getQuizType(quiz_type);
    if (!type) throw new UserInputError('Quiz type is unknown.');

    const { id: type_id } = type;
    const { id: user_id } = user.account;

    const result = await Quiz.create({
      user_id,
      title,
      description,
      type_id,
      is_public,
      is_active: true,
    });

    const sets = await flashcards.map((obj) => ({ ...obj, quiz_id: result.id }));
    await Flashcard.bulkCreate(sets);

    return result;
  },
};

module.exports = { QuizMutations };
