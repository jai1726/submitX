const express=require('express');
const cors=require('cors');
const dotenv = require('dotenv');
const connectDB=require('./db');
const router = require('./routes/User.Routes.js');


dotenv.config();

const PORT=process.env.PORT||5500;
const app=express();
app.use(cors());
app.use(express.json());

connectDB();
app.use("/api/user", router);

app.use('/',(req,res)=>{
    res.json("get working");
});

app.listen(PORT,()=>{
console.log(`app listening on http://localhost:${PORT}`);
})
