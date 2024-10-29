require('dotenv').config();
const express = require('express');
const app = express();
const tokenRoute= require('./routes/token')
const cors = require('cors');

app.use(express.json());
app.use(cors());

// Mount the token route at /token
app.use('/token', tokenRoute);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
