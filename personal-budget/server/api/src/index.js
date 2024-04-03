const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const userSchema = require('./models/user.model');

// Load environment variables from .env file
dotenv.config();


// Create Express app
const app = express();

// Parse incoming requests with JSON payloads
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });

// Define a User model
//const User = userSchema




// Define a login route
app.post('/login', userLogin);

// Start the server
const port = 3001;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});