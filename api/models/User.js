const Sequelize = require('sequelize');
const encryptService = require('../services/encrypt.service');
const Database = require('../../config/Database');

const hooks = {
  beforeCreate(user) {
    user.password = encryptService().password(user); // eslint-disable-line no-param-reassign
  },
};

const tableName = 'Users';

const User = Database.define(
  tableName,
  {
    user_id: {
      type: Sequelize.BIGINT,
      primaryKey: true,
      unique: true,
      allowNull: false,
      required: true,
      field: 'user_id',
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      field: 'name',
    },
    username: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      field: 'username',
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
      field: 'password',
    },
    email_address: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false,
      field: 'email_address',
    },
    access: {
      type: Sequelize.STRING,
      allowNull: false,
      field: 'access',
    },
  },
  {
    hooks,
    tableName,
    timestamps: true,
    createdAt: 'date_created',
  },
);

User.prototype.toJSON = function () {
  const values = { ...this.get() };
  delete values.password;

  return values;
};

module.exports = User;
