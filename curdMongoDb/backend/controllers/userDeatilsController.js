const User  = require('../models/userDetailsModel')
const { DataTypes, Sequelize } = require('sequelize');
const connection = require('../db/dbMysql');

// Create a new user
const createUser = async (req, res) => {
  try {
    const {
      Id,
      User_Type,
      Name,
      userName,
      Email,
      Email_Varified_At,
      Phone_Number,
      Phone_Number_At,
      Dob,
      Gender,
      profilePictureData,
      profilePictureContentType,
      Status,
      Referred_By
    } = req.body;

    console.log("userData", req.body);

    // Use the 'execute' method of the connection pool
    const [userResult] = await connection.execute(
      'INSERT INTO users (Id, User_Type, Name, userName, Email, Email_Varified_At, Phone_Number, Phone_Number_At, Dob, Gender, profilePictureData, profilePictureContentType, Status, Referred_By) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [Id, User_Type, Name, userName, Email, Email_Varified_At, Phone_Number, Phone_Number_At, Dob, Gender, profilePictureData, profilePictureContentType, Status, Referred_By]
    );

    res.status(201).json({ success: true, message: 'User created successfully', user: userResult });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: error.message });
  }
};

module.exports = {
  createUser
};
