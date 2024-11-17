const Assignment = require('../models/Assignment.model');

const rejectAssignment = async (req, res) => {
    try {
      const { id } = req.params; // Assignment ID from URL
  
      // Update assignment status
      const updatedAssignment = await Assignment.findOneAndUpdate(
        { _id: id, adminId: req.user.id }, // Ensure assignment belongs to this admin
        { status: 'rejected' },
        { new: true } // Return updated document
      );
  
      if (!updatedAssignment) {
        return res.status(404).json({ message: 'Assignment not found or not tagged to you' });
      }
  
      res.status(200).json({ message: 'Assignment rejected successfully', assignment: updatedAssignment });
    } catch (error) {
      res.status(500).json({ message: 'Server error', error: error.message });
    }
  };
  module.exports=rejectAssignment;