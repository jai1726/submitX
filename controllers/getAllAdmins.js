const User = require('../models/User.model');

const getAllAdmins = async (req, res) => {
  try {
     //fecthing username and email of  the admin based on role 
         const admins = await User.find({ role: 'admin' }).select('username email');
    res.status(200).json({ message: 'Admins fetched successfully', admins });

  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }

};
module.exports=getAllAdmins;