const express = require('express');
const bodyParser = require('body-parser');
const MongoDB = require('mongodb');
const userSchema = require('../models/user.model');


const router = express.Router();
const app = express();

app.use(bodyParser.json());

const userLogin = async (req, res) => {
    const { username, password } = req.body;

    try {
        // Find the user in the database
        const user = await userSchema.findOne({ username });

        // Check if the user exists and the password is correct
        if (user && user.password === password) {
            res.json({ message: 'Login successful' });
        } else {
            res.status(401).json({ message: 'Invalid username or password' });
        }
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

const userSignup = async (req, res) => {
    const { username, password } = req.body;

    try {
        // Check if the user already exists
        const existingUser = await userSchema.findOne({
            username,
        }); // Find a user with the given username

        if (existingUser) {
            res.status(400).json({ message: 'User already exists' });
            return;
        }

        // Create a new user
        const user = new userSchema({
            username,
            password,
        });

        // Save the user to the database
        await user.save();
        
        res.json({ message: 'User created successfully' });

    } catch (error) {
        console.error('Error during signup:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}   
router.post('/login', userLogin);
router.post('/signup', userSignup);

module.exports = router;