import e from 'express'

const _song_router = e.Router()

_song_router.get('/get-all', getAllSong)

export default {
    song_router : _song_router 
}