const User = require('../models/User.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const login = async (req, res, next) => {
  console.log("logining");
    const { email, password } = req.body;   //assigning email from req. body


    //if  email or password is absent then we will return this message
    if (!email || !password) {
        return res.status(404).json({ message: "Enter all fields" });
    }

    //finding the user , whether already present to login 
    let existingUser;
    try {
        existingUser = await User.findOne({ email });   //finding the user based on email
    } catch (err) {
        console.log(err);
        return res.status(402).json({ message: "error in checking user, try again" });
    }

    if (!existingUser) return res.status(401).json({ message: "User Not exist,Login instead" });

    const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password);   // companring the bcrypted password whether it matches or not to login
    if (!isPasswordCorrect) {
        return res.status(403).json({ messsage: "wrong password" })
    }

//creating token with taking payloads userId,email, role
    const token = jwt.sign(
        { userId: existingUser._id, email: existingUser.email,role:existingUser.role },  
        process.env.JWT_SECRET_KEY,
        { expiresIn: '1h' }
    );

    return res.status(200).json({ message: "login Successful", token });
}
module.exports = login;