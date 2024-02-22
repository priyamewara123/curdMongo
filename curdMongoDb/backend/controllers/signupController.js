const pool = require('../db/dbMysql');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const signUpDetails = async (req, res) => {
  try {
    const { username, email, country, password, signupDate } = req.body;

    // Check if the email already exists in the database
    const [existingUser] = await pool.execute('SELECT * FROM signupusers WHERE email = ?', [email]);

    if (existingUser.length > 0) {
      return res.status(400).json({ success: false, message: 'Email is already in use. Please choose another.' });
    }

    const hashedPassword = await bcrypt.hash(password, saltRounds);
    await pool.execute('INSERT INTO signupusers (username, email, country, password) VALUES (?, ?, ?, ?)', [username, email, country, hashedPassword]);

    console.log('Registration successful');
    res.status(201).json({ success: true, message: 'Registration successful' });
  } catch (error) {
    console.error('Error during registration:', error.message);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};

const loginDetails = async (req, res) => {
  try {
    const { email, password } = req.body;

    const [existingUser] = await pool.execute('SELECT * FROM signupusers WHERE email = ?', [email]);

    if (existingUser.length === 0) {
      return res.status(401).json({ success: false, message: 'Incorrect username or password' });
    }

    const isPasswordMatch = await bcrypt.compare(password, existingUser[0].password);
    console.log('Hashed Password:', existingUser[0].password);
    console.log('User-Provided Password:', password);
    console.log('Password Match Result:', isPasswordMatch);
    
    if (!isPasswordMatch) {
      return res.status(401).json({ success: false, message: 'Incorrect username or password' });
    } else {
      res.status(200).json({ success: true, message: 'Login successful', user: existingUser[0] });
    }
  } catch (error) {
    console.error('Error during login:', error.message);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};

const getUser = async (req, res) => {
  try {
    const [users] = await pool.execute('SELECT * FROM signupusers');
    res.status(200).json({
      success: true,
      users,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  signUpDetails,
  loginDetails,
  getUser
};
