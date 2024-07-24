import mongoose from "mongoose";

const connectDB = async () => {
    console.log('here i am ', process.env.MONGO_URL);
   // return mongoose.connect(process.env.MONGO_URL as string);
   return mongoose.connect( "mongodb+srv://izharmohammed21:rGWGtVejqZFrxRfc@cluster0.b2jxoba.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
}

export default connectDB;