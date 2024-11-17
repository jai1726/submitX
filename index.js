const express=require('express');
const cors=require('cors');
const dotenv = require('dotenv');

const PORT=process.env.PORT||5500;
const app=express();
app.use(cors());
app.use(express.json());

app.use('/',(req,res)=>{
    res.json("get working");
});

app.listen(PORT,()=>{
console.log(`app listening on http://localhost:${PORT}`);
})
