module.exports = (DataTypes , sequelize) => {
const User = sequelize.define('user', {
Id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  User_Type: {
    type: DataTypes.STRING
  },
  Name: {
    type: DataTypes.STRING
  },
  userName: {
    type: DataTypes.STRING
  },
  Email: {
    type: DataTypes.STRING
  },
  Email_Varified_At: {
    type: DataTypes.DATE
  },
  Phone_Number: {
    type: DataTypes.STRING
  },
  dob: {
    type: DataTypes.DATE
  },
  gender: {
    type: DataTypes.STRING
  },
  profilePictureData: {
    type: DataTypes.STRING,
    defaultValue: 'base64_encoded_data_here'
  },
  profilePictureContentType: {
    type: DataTypes.STRING,
    defaultValue: 'image/jpeg'
  },
  Status: {
    type: DataTypes.STRING
  },
  Created_At: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW // Default value set to current timestamp
  },
  Updated_At: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW // Default value set to current timestamp
  },
  Referred_By: {
    type: DataTypes.STRING
  }
});


}
