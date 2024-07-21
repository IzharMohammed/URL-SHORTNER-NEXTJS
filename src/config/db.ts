import mongoose from "mongoose";

const connectDB = async () => {
    console.log('here', process.env.MONGO_URL);
    return mongoose.connect(process.env.MONGO_URL as string);
}

export default connectDB;