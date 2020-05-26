const Sequelize = require('sequelize');
const Database = require('../../config/Database');

const tableName = 'Attempts';

const Attempt = Database.define(
  tableName,
  {
    quiz_id: {
      type: Sequelize.BIGINT,
      allowNull: false,
      field: 'quiz_id',
    },
    user_score: {
      type: Sequelize.BIGINT,
      allowNull: false,
      field: 'user_score',
    },
    max_score: {
      type: Sequelize.BIGINT,
      allowNull: false,
      field: 'max_score',
    },
    user_id: {
      type: Sequelize.BIGINT,
      allowNull: false,
      field: 'user_id',
    },
  },
  {
    tableName,
    timestamps: false,
    createdAt: 'date_created',
  },
);

module.exports = Attempt;
