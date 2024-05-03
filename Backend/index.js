import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bookRoute from './route/book.route.js';
import userRoute from './route/user.route.js';
import cors from 'cors';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json()); // It will parse the req.body data into Json. If we do not use then will get error
const PORT = process.env.PORT || 4001;
const URI = process.env.DBConnection;
// Database Connection
try {
    mongoose.connect(URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("Connected to mongo db");
} catch (error) {
    console.log(error);
}

// Defining Routes
app.use('/book',bookRoute); // Imported 
app.use('/user',userRoute); //Imported

app.listen(PORT,()=>{
    console.log("Server is running")
})