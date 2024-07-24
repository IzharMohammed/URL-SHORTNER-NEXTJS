"use server"
import mongoose from "mongoose";

const connectDB = async () => {
    console.log('here i am ', process.env.MONGO_URL);
   return mongoose.connect(process.env.MONGO_URL as string);

}

export default connectDB;