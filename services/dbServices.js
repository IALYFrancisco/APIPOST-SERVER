export async function dbConnexion() {
    try {
        await mongoose.connect(process.env.DB_URI)
            .then(()=>{console.log("Connected to database ✅")})
            .catch((error)=>{ console.log("There are an errors on db connexion 🔥: "+ error ) });
    }catch(error){
        console.log("Database conection error: " + error)
    }
}
