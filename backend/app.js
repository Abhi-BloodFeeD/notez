const express = require('express');
const authRoutes = require('./authRoutes');
require('dotenv').config()

const port = process.env.PORT;

const app = express();

app.use('/', authRoutes);

// Start the server
app.listen(port||3000, () => {
  console.log('Server started on port 3000');
});
