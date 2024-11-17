const Assignment = require('../models/Assignment.model');
const User = require('../models/User.model');

const uploadAssignment = async (req, res) => {
  const { task, adminUsername  } = req.body;

 if(req.user.role!=='user')return res.status(404).json({message:'admins cant upload assignments'})


  try {
    // Validate the admin's username
    const admin = await User.findOne({ username: adminUsername, role: 'admin' });
    if (!admin) {
      return res.status(404).json({ message: 'Admin not found' });
    }

    // Create the assignment
    const assignment = new Assignment({
      userId: req.user.id, // Extracted from token via auth middleware
      adminId: admin._id, // Fetched from the admin's username
      task,
    });

    await assignment.save();

    res.status(201).json({ message: 'Assignment uploaded successfully', assignment });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
module.exports=uploadAssignment;