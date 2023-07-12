//movie database from db.json
const movieDatabase = require('./db.json')
let currentId = 11
module.exports = {
    getMovies:(req, res) => {
    res.status(200).send(movieDatabase) // send movieDatabase to frontend
    },
    addMovie: (req, res) => {
        const { title, rating, imageURL } = req.body
        movieDatabase.push({
            id: currentId,
            title: title,
            rating: rating,
            imageURL: imageURL
        }) 
        currentId++
        res.status(200).send(movieDatabase)
    },
    deleteMovie: (req, res) => {
        const id = +req.params.id // add + because param that is sent from route parameter is string so convert it to number.
        
        for (let i = 0; i < movieDatabase.length; i++){
            if (movieDatabase[i].id === id) {
                movieDatabase.splice(i, 1)
                res.status(200).send(movieDatabase)
                return
            }
        }
        res.status(400).send('Movie not found')
    },
    updateMovie: (req, res) => {
        const id = +req.params.id
       // console.log(id)
       // console.log(req.body)
        const type = req.body.type
        let movieIndex
        for (let i = 0; i < movieDatabase.length; i++){
            if (movieDatabase[i].id === id) {
                movieIndex = i
            }
        }
        if (movieIndex === undefined) {
            res.status(400).send('movie not found')
        } else if (type === 'plus') {
            if (movieDatabase[movieIndex].rating < 5) {
               movieDatabase[movieIndex].rating++ 
            }
            res.status(200).send(movieDatabase)
        } else if (type === 'minus') {
            if (movieDatabase[movieIndex].rating > 1) {
               movieDatabase[movieIndex].rating-- 
            }
            res.status(200).send(movieDatabase)
        } else {
            res.status(400).send('invalid')
        }
    }
} // if another file require this file then this file get it.
