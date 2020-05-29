const Sequelize = require('sequelize');
const Database = require('../../config/Database');

const tableName = 'QuizTypes';

const QuizType = Database.define(
  tableName,
  {
    title: {
      type: Sequelize.STRING,
      allowNull: false,
      field: 'title',
    },
  },
  {
    tableName,
    timestamps: false,
  },
);

module.exports = QuizType;
