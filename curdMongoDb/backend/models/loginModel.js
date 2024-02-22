
const { DataTypes } = require('sequelize');
const sequelize = require('./dbMysql');

const LoginUser = sequelize.define('LoginUser', {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = LoginUser;
