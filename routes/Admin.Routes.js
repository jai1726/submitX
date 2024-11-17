const express = require('express');
const authenticateToken=require('../middleware/auth');
const getAssignments=require('../controllers/getAssignments');
const acceptAssignment=require('../controllers/acceptAssignment');
const rejectAssignment=require('../controllers/rejectAssignment');


const adminRouter=express.Router();    //creating admin router

//for admin end points  it will call the authenticateToken function from that token is validated and adds the user id to req.body
adminRouter.get('/assignments',authenticateToken,getAssignments);
adminRouter.post('/assignment/accept/:id',authenticateToken,acceptAssignment);
adminRouter.post('/assignment/reject/:id',authenticateToken,rejectAssignment);

module.exports=adminRouter;