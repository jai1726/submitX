const User = require('../models/User.models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const login = async (req, res, next) => {
  console.log("logining");
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(404).json({ message: "Enter all fields" });
    }

    let existingUser;
    try {
        existingUser = await User.findOne({ email });
    } catch (err) {
        console.log(err);
        return res.status(402).json({ message: "error in checking user, try again" });
    }

    if (!existingUser) return res.status(401).json({ message: "User Not exist,Login instead" });

    const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password);
    if (!isPasswordCorrect) {
        return res.status(403).json({ messsage: "wrong password" })
    }


    const token = jwt.sign(
        { userId: existingUser._id, email: existingUser.email },
        process.env.JWT_SECRET_KEY,
        { expiresIn: '1h' }
    );

    return res.status(200).json({ message: "login Successful", token });
}
module.exports = login;