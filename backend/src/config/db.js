// backend/src/config/db.js

import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MONGODB CONNECTED SUCCESSFULLY ☑️`);
    } catch (error) {
        console.error("MONGODB CONNECTION FAILED ❌");
        process.exit(1); // Exit the process with failure
    }
};
