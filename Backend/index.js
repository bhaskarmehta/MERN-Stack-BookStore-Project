import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bookRoute from './route/book.route.js'
import cors from 'cors';

dotenv.config();

const app = express();
app.use(cors());
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
app.use('/book',bookRoute);

app.listen(PORT,()=>{
    console.log("Server is running")
})