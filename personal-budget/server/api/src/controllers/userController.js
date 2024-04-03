exports.userNameCheck = async (req, res) => {
    const { username } = req.body;

    try {
        // Check if the user already exists
        const existingUser = await userSchema.findOne({
            username,
        }); // Find a user with the given username

        if (existingUser) {
            res.status(400).json({ message: 'User already exists' });
            return;
        }

        res.json({ message: 'Username is available' });

    } catch (error) {
        console.error('Error during username check:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

exports.userLogin = async (req, res) => {
    const { username, password } = req.body;

    try {
        // Find the user in the database
        const user = await userSchema.findOne({ username, password });

        // Check if the user exists and the password is correct
        if (user) {
            res.json({ message: 'Login successful' });
        } else {
            res.status(401).json({ message: 'Invalid username or password' });
        }   
    }
    catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

exports.userSignup = async (req, res) => {
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

exports.userDelete = async (req, res) => {
    const { username } = req.body;

    try {
        // Find the user in the database
        const user = await userSchema.findOne({ username });

        // Check if the user exists
        
        if (user) {
            await userSchema.deleteOne({ username   });
            res.json({ message: 'User deleted successfully' });
        }
        else {
            res.status(401).json({ message: 'Invalid username' });
        }
    }
    catch (error) {
        console.error('Error during delete:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

exports.userUpdate = async (req, res) => {
    const { username, password, email } = req.body;

    try {
        // Find the user in the database
        const user = await userSchema.findOne({ username,email,password });

        // Check if the user exists
        if (user) {
            await userSchema.updateOne
            ({ username: username }, { email: email });
            res.json({ message: 'User updated successfully' });
        }
        else {
            res.status(401).json({ message: 'Invalid username' });
        }
    }
    catch (error) {
        console.error('Error during update:', error);
        res.status(500).json({ message: 'Internal server error' });
    }

}

exports.userGet = async (req, res) => {
    const { username } = req.body;

    try {
        // Find the user in the database
        const user = await userSchema.findOne({ username });

        // Check if the user exists
        if (user) {
            res.json({ message: 'User found' });
        }
        else {
            res.status(401).json({ message: 'Invalid username' });
        }
    }
    catch (error) {
        console.error('Error during get:', error);
        res.status(500).json({ message: 'Internal server error' });
    }

}

exports.userGetAll = async (req, res) => {
    try {
        // Find the user in the database
        const user = await userSchema.find({});

        // Check if the user exists
        if (user) {
            res.json({ message: 'User found' });
        }
        else {
            res.status(401).json({ message: 'Invalid username' });
        }
    }
    catch (error) {
        console.error('Error during get:', error);
        res.status(500).json({ message: 'Internal server error' });
    }

}

exports.userLogout = async (req, res) => {
    const { username } = req.body;

    try {
        // Find the user in the database
        const user = await userSchema.findOne({ username });

        // Check if the user exists
        if (user) {
            res.json({ message: 'Logout successful' });
        }
        else {
            res.status(401).json({ message: 'Invalid username' });
        }
    }
    catch (error) {
        console.error('Error during logout:', error);
        res.status(500).json({ message: 'Internal server error' });
    }

}

exports.userChangePassword = async (req, res) => {
    const { username, password, newPassword } = req.body;

    try {
        // Find the user in the database
        const user = await userSchema.findOne
        ({ username, password });

        // Check if the user exists
        if (user) {
            await userSchema.updateOne
            ({ username: username }, { password: newPassword });
            res.json({ message: 'Password changed successfully' });
        }
        else {
            res.status(401).json({ message: 'Invalid username or password' });
        }
    }
    catch (error) {
        console.error('Error during change password:', error);
        res.status(500).json({ message: 'Internal server error' });
    }

}

exports.userForgotPassword = async (req, res) => {
    const { username, email } = req.body;

    try {
        // Find the user in the database
        const user = await userSchema.findOne
        ({ username, email });

        // Check if the user exists
        if (user) {
            res.json({ message: 'Email sent successfully' });
        }
        else {
            res.status(401).json({ message: 'Invalid username or email' });
        }
    }
    catch (error) {
        console.error('Error during forgot password:', error);
        res.status(500).json({ message: 'Internal server error' });
    }

}

exports.userResetPassword = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        // Find the user in the database
        const user = await userSchema.findOne   
        ({ username, email });

        // Check if the user exists
        if (user) {
            await userSchema.updateOne
            ({ username: username }, { password: password });
            res.json({ message: 'Password reset successfully' });
        }   
        else {
            res.status(401).json({ message: 'Invalid username or email' });
        }
    }
    catch (error) {
        console.error('Error during reset password:', error);
        res.status(500).json({ message: 'Internal server error' });
    }

}

exports.userChangeEmail = async (req, res) => {
    const { username, email, newEmail } = req.body;

    try {
        // Find the user in the database
        const user = await userSchema.findOne
        ({ username, email });

        // Check if the user exists
        if (user) {
            await userSchema.updateOne
            ({ username: username }, { email: newEmail });
            res.json({ message: 'Email changed successfully' });
        }
        else {
            res.status(401).json({ message: 'Invalid username or email' });
        }
    }
    catch (error) {
        console.error('Error during change email:', error);
        res.status(500).json({ message: 'Internal server error' });
    }

}

exports.userChangeUsername = async (req, res) => {      
    const { username, email, newUsername } = req.body;

    try {
        // Find the user in the database
        const user = await userSchema.findOne
        ({ username, email });

        // Check if the user exists
        if (user) {
            await userSchema.updateOne
            ({ username: username }, { username: newUsername });
            res.json({ message: 'Username changed successfully' });
        }
        else {
            res.status(401).json({ message: 'Invalid username or email' });
        }
    }
    catch (error) {
        console.error('Error during change username:', error);
        res.status(500).json({ message: 'Internal server error' });
    }

}


