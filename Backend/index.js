import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4001;

app.get('/',(req,res)=>{
    res.send("I am from Express")
});

app.get('/about',(req,res)=>{
    res.send("I am from Express About")
});

app.listen(PORT,()=>{
    console.log("Server is running")
})