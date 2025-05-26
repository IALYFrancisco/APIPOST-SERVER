import mongoose from "mongoose";

const SongsSchema = new mongoose.Schema({
    title : { type : String, required : true },
    weight : { type : String },
    duration : { type : String },
    author: { type: String, required: true },
    file_url : { type: String, required: true },
    album : { type : String },
    add_date : { type : Date, required: true, default: Date.now }
})

export const Songs = new mongoose.model("Songs", SongsSchema)