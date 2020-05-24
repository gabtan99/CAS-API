const Sequelize = require('sequelize');
const Database = require('../../config/Database');

const tableName = 'QuizTypes';

const QuizType = Database.define(
  tableName,
  {
    id: {
      type: Sequelize.BIGINT,
      primaryKey: true,
      unique: true,
      allowNull: false,
      field: 'id',
    },
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
