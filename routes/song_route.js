import e from 'express'

const song_router = e.Router()

song_router.get('/get-all', getAllSong)