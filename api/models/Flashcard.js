const Sequelize = require('sequelize');
const Database = require('../../config/Database');

const tableName = 'Flashcards';

const Flashcard = Database.define(
  tableName,
  {
    quiz_id: {
      type: Sequelize.BIGINT,
      allowNull: false,
      field: 'quiz_id',
    },
    question: {
      type: Sequelize.STRING,
      allowNull: true,
      field: 'question',
    },
    correct_answer: {
      type: Sequelize.STRING,
      allowNull: true,
      field: 'correct_answer',
    },
    wrong_answer_a: {
      type: Sequelize.STRING,
      allowNull: true,
      field: 'wrong_answer_a',
    },
    wrong_answer_b: {
      type: Sequelize.STRING,
      allowNull: true,
      field: 'wrong_answer_b',
    },
  },
  {
    tableName,
    timestamps: false,
  },
);

module.exports = Flashcard;
