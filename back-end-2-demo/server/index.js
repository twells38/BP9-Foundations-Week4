//main backend file
const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json()) 


const { getMovies, addMovie, deleteMovie ,updateMovie } = require('./controller.js') //destructuring



// 1st endpoint
app.get('/api/movies', getMovies)

// 2 endpoint to add movie
app.post('/api/movies', addMovie)

//delete
app.delete('/api/movies/:id', deleteMovie)
//put
app.put('/api/movies/:id', updateMovie)


const SERVER_PORT = 4004
app.listen(SERVER_PORT, () => {
    console.log(`Server ${SERVER_PORT} is running`)
})


