const User = require('../models/User.model');  // Importing User model
const bcrypt=require('bcrypt');

 const signUp = async (req, res, next) => {
    console.log("signup request recieved");  
    console.log(req.body);   
    const { email, username, password, role } = req.body;   //assigning email from req. body

    //if  any field  is absent then we will return this message
    if (!email || !username || !password || !role ) {
        return res.status(404).json({ message: "Enter all fields" });
    }

    //checking either role is admin or user
    if (!['user', 'admin'].includes(role)) {
        return res.status(400).json({ message: 'Invalid role. Choose either "user" or "admin".' });
      }

    let existingUser;
    try {
        // checking if user already exists
        existingUser =await User.findOne({email});
    } catch (err) {
        console.log(err);
        return res.status(400).json({ message: "Try again" });
    }

    if (existingUser) return res.status(400).json({ message: "User already , Instead Login " });

// Hashing the password
    const saltRounds = 10;
    let hashedPassword=bcrypt.hashSync(password,saltRounds);

    const user = new User({
        email, 
        username,
        password:hashedPassword,
        role  //  'user' / 'admin'
    });

    try {
        // saving the user to the database
        await user.save();

    } catch (err) {
        return res.status(500).json({ message: "please Try again, server Error" });
    }

    return res.status(200).json({ user });

}
module.exports=signUp;