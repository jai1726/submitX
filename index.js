const express=require('express');
const cors=require('cors');
const dotenv = require('dotenv');
const connectDB=require('./db');
const router = require('./routes/User.Routes.js');
const adminRouter=require('./routes/Admin.Routes.js');
const authRouter=require('./routes/Auth.Routes.js');
dotenv.config();

const PORT=process.env.PORT||5500;
const app=express();  
app.use(cors());
app.use(express.json());

connectDB();   // calling function to connect Database


app.use("/api/user", router);   //user endpoint 
app.use("/api/admin",adminRouter);   //admin endpoint
app.use("/api/auth",authRouter);   //Auth  endpoint

app.use('/',(req,res)=>{
    res.json("get working");
});

app.listen(PORT,()=>{
console.log(`app listening on http://localhost:${PORT}`);
})
