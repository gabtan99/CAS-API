const Sequelize = require('sequelize');
const Database = require('../../config/Database');

const tableName = 'Quizzes';

const Quiz = Database.define(
  tableName,
  {
    user_id: {
      type: Sequelize.BIGINT,
      allowNull: true,
      field: 'user_id',
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
      field: 'title',
    },
    description: {
      type: Sequelize.STRING,
      allowNull: true,
      field: 'description',
    },
    type_id: {
      type: Sequelize.BIGINT,
      allowNull: true,
      field: 'type_id',
    },
    is_public: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      field: 'is_public',
    },
    is_active: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      field: 'is_active',
    },
    date_created: {
      type: Sequelize.DATE,
      allowNull: true,
      field: 'date_created',
    },
  },
  {
    tableName,
    timestamps: false,
    createdAt: 'date_created',
  },
);

module.exports = Quiz;
