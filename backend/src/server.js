import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import notesRoute from "./routes/notesRoute.js";
import { connectDB } from "./config/db.js";
import rateLimiter from './middleware/rateLimiter.js';

dotenv.config();
 // Log the MongoDB URI for debugging


const app = express();
const PORT = process.env.PORT || 5001;

app.use(
    cors({
    origin:"http://localhost:5173", 
    credentials: true, // Allow cookies to be sent with requests
    })
);
app.use(express.json()); // Middleware to parse JSON bodies
app.use(rateLimiter);


app.use((req,res,next) => {
    console.log(`request method is  ${req.method} $ Req URL is ${req.url}`);
    next();


})

app.use("/api/notes", notesRoute);


connectDB().then(() => {})
app.listen(PORT,() => {
console.log("Server started on port: ", PORT);
});