const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const userDetailsRoutes = require('./routes/userDetailsRoutes');
const pool = require('./db/dbMysql');

const app = express();
app.use(express.json())

app.use(cors());
app.use(bodyParser.json());
const PORT = process.env.PORT || 4000;
// Routes
app.use('/users', userDetailsRoutes);



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
