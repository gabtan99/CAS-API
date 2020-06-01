const { AuthenticationError, UserInputError } = require('apollo-server-express');
const Quiz = require('../models/Quiz.model');
const Flashcard = require('../models/Flashcard.model');
const getQuizType = require('../util/getQuizType');
const getFlashcardActions = require('../util/getFlashcardActions');
const toTitleCase = require('../util/toTitleCase');

const QuizMutations = {
  async createQuiz(_, { title, description, quiz_type, is_public, flashcards }, { user }) {
    if (!user) throw new AuthenticationError('You must be logged in to add a quiz.');

    const type = await getQuizType(quiz_type);
    if (!type) throw new UserInputError('Quiz type is unknown.');

    const { id: type_id } = type;
    const { id: user_id } = user.account;

    const result = await Quiz.create({
      user_id,
      title: toTitleCase(title),
      description,
      type_id,
      is_public,
      is_active: true,
    });

    const sets = await flashcards.map((obj) => ({ ...obj, quiz_id: result.id }));
    await Flashcard.bulkCreate(sets);

    return result;
  },

  async deleteQuiz(_, { quiz_id }, { user }) {
    if (!user) throw new AuthenticationError('You must be logged in to add a quiz.');

    const result = await Quiz.update(
      { is_active: false },
      { where: { id: quiz_id, user_id: user.account.id } },
    );

    return result[0];
  },

  async updateQuiz(_, { quiz_id, title, description, quiz_type, is_public, flashcards }, { user }) {
    if (!user) throw new AuthenticationError('You must be logged in to update a quiz.');

    const type = await getQuizType(quiz_type);
    if (!type) throw new UserInputError('Quiz type is unknown.');

    const { id: type_id } = type;

    const result = await Quiz.update(
      { title: toTitleCase(title), description, type_id, is_public, type_id },
      { where: { id: quiz_id, user_id: user.account.id, is_active: true } },
    );

    const successful = result[0];

    if (successful) {
      const existing_sets = await Flashcard.findAll({ where: { quiz_id }, raw: true });
      const updated_sets = flashcards.map((obj) => ({
        ...obj,
        id: parseInt(obj.id),
        quiz_id: parseInt(quiz_id),
      }));

      const { create: c, update: u, delete: d } = getFlashcardActions(existing_sets, updated_sets);

      //  Create Cards
      Flashcard.bulkCreate(c);

      // Update Cards
      u.forEach(({ id, quiz_id, ...obj }) =>
        Flashcard.update({ ...obj }, { where: { id, quiz_id } }),
      );

      // Delete Cards
      d.forEach(({ id }) => Flashcard.destroy({ where: { id } }));
    }

    return successful;
  },
};

module.exports = { QuizMutations };
