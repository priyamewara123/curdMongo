// models/User.js
const { DataTypes } = require('sequelize');
const sequelize = require('../db/dbMysql');

const User=  sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    required: true,
  },
  email: {
    type: DataTypes.STRING,
    required: true,
  },
  phoneNumber: {
    type: DataTypes.STRING,
    required: true,
  },
  message: {
    type: DataTypes.STRING,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});


module.exports = User;
