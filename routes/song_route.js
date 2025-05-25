import e from 'express'
import { getAllSong } from '../services/songServices.js'

export const song_router = e.Router()

song_router.get('/get-all', getAllSong)
