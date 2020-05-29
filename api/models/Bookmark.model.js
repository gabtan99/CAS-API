const Sequelize = require('sequelize');
const Database = require('../../config/Database');

const tableName = 'Bookmarks';

const Bookmark = Database.define(
  tableName,
  {
    quiz_id: {
      type: Sequelize.BIGINT,
      allowNull: false,
      field: 'quiz_id',
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
  },
);

module.exports = Bookmark;
