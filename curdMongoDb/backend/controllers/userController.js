const pool = require('../db/dbMysql');

const createUser = async (req, res) => {
  try {
    const { name, email, phoneNumber, message, description } = req.body;
    
    const newUser = await User.create({ name, email, phoneNumber, message, description });
    console.log("req", newUser);

    res.status(201).json({ success: true, message: 'Info sent successfully', user: newUser });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

module.exports = { createUser };
