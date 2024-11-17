const Assignment = require('../models/Assignment.model');

const acceptAssignment = async (req, res) => {
    try {
      const { id } = req.params;    // Assigning id  from URL
   
      // Updating assignment status
      const updatedAssignment = await Assignment.findOneAndUpdate(
        { _id: id, adminId: req.user.id }, // checking assignment belongs to this admin
        { status: 'accepted' },
        { new: true } // Returning  updated document
      );
  
      if (!updatedAssignment) {
        return res.status(404).json({ message: 'Assignment not found or not tagged to you' });
      }
  
      res.status(200).json({ message: 'Assignment accepted successfully', assignment: updatedAssignment });
    } catch (error) {
      res.status(500).json({ message: 'Server error', error: error.message });
    }
  };

  module.exports=acceptAssignment;