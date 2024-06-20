import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

function dbConnexion() {
    mongoose.connect(`${process.env.DB_URI}`)
        .then(()=>{console.log("Connected to database ✅")})
        .catch((error)=>{ console.log("There are an errors on db connexion 🔥: "+ error ) });
}

export default dbConnexion();
