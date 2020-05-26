const Sequelize = require('sequelize');
const encryptService = require('../services/encrypt.service');
const Database = require('../../config/Database');

const hooks = {
  beforeCreate(user) {
    user.password = encryptService().generatePassword(user); // eslint-disable-line no-param-reassign
  },
};

const tableName = 'Users';

const User = Database.define(
  tableName,
  {
    full_name: {
      type: Sequelize.STRING,
      allowNull: false,
      field: 'full_name',
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
    date_created: {
      type: Sequelize.DATE,
      allowNull: true,
      field: 'date_created',
    },
  },
  {
    hooks,
    tableName,
    timestamps: false,
    createdAt: 'date_created',
  },
);

User.prototype.toJSON = function () {
  const values = { ...this.get() };
  delete values.password;

  return values;
};

module.exports = User;
