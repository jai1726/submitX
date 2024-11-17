const express = require('express');
const authenticateToken=require('../middleware/auth');
const uploadAssignment=require('../controllers/uploadAssignment');
const getAllAdmins =require('../controllers/getAllAdmins');

const router=express.Router();  //creating router for user

//for user end point  it will call the authenticateToken function from that , token is validated and adds the user.id to req.body


router.post('/upload',authenticateToken,uploadAssignment);
router.get('/admins',authenticateToken,getAllAdmins);

module.exports=router;   //exporting router