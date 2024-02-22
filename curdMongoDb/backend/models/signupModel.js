const { DataTypes } = require('sequelize');
const sequelize = require('../db/dbMysql');

const Signup = sequelize.define('Signup', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  country: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  signupDate: {
    type: DataTypes.STRING,
    defaultValue: () => new Date().toLocaleDateString('en-US'),
  },
});

module.exports = Signup;
