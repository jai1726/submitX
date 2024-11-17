const Assignment = require('../models/Assignment.model');

const getAssignments = async (req, res) => {
  try {

    // Fetching assignments tagged to the logged-in admin
    const assignments = await Assignment.find({ adminId: req.user.id })
      .populate('userId', 'username email') // Populating user details
      .select('-__v'); // Excluding __v from the response

    res.status(200).json({ message: 'Assignments fetched successfully', assignments });

  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

module.exports=getAssignments;