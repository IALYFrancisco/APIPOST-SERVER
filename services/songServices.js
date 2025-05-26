import { Songs } from "../models/Songs.js";
import { dbConnexion, dbDisconnexion } from "./dbServices.js";

export async function getAllSong(request, response) {
    try{
        await dbConnexion()
        let all_song = await Songs.find({})
        response.status(200).json({
            message: "There are the songs list.",
            data: all_song
        })
    }catch(err){
        response.status(500).json({
            message: "Error fetching songs list. May be server error.",
            error : err
        })
    }
    finally{
        await dbDisconnexion()
    }
}

export async function addSong(request, response) {
    try{
        await dbConnexion()
        let newSong = Songs(request.body)
        await newSong.save()
        response.status(201).json({
            message: "Song added"
        })
    }catch(err){
        response.status(500).json({
            message : "Error adding new song. Maybe server error.",
            error : err
        })
    }
    finally{
        await dbDisconnexion()
    }
}