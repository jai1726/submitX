const express = require('express');
const signUp=require('../controllers/signUp');
const login=require('../controllers/login');


const authRouter=express.Router();   //creating Auth  router for login and signup


authRouter.post('/register',signUp);
authRouter.post('/login',login);


module.exports=authRouter;