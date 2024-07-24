import mongoose, { Document, Model } from "mongoose";
/*
Mongoose schemas support a timestamps option. If you set timestamps: true, Mongoose will add two properties of type Date to your schema:

createdAt: a date representing when this document was created
updatedAt: a date representing when this document was last updated

Model: This is a Mongoose class used to create and interact with documents in a collection. It includes various static methods like find, findOne, create, update, etc.
*/

const urlSchema = new mongoose.Schema({
    originalUrl: {
        type: String,
        required: true,
        unique: true,
    },
    shortUrl: {
        type: String,
        required: true,
        unique: true,
    }
}, { timestamps: true }); // Automatically add createdAt and updatedAt fields

export interface IUrl extends Document {
    originalUrl: string,
    shortUrl: string,
    //createdAt?: Date; // Optional because Mongoose will add it automatically
    //updatedAt?: Date; // Optional because Mongoose will add it automatically
}

// mongoose.models: This is a Mongoose object that stores models that have already been created. When a model is created, it is stored in mongoose.models.
// Create the Mongoose model for the URL schema
// If the Url model already exists, use it; otherwise, create a new model
const Url = mongoose.model('Url', urlSchema);

export default Url;