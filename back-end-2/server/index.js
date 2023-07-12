const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())

const { getHouses,createHouse, updateHouse, deleteHouse } = require('./controller.js')
// app.get
app.get('/api/houses', getHouses)

// app.post to creat a house
app.post('/api/houses', createHouse)

//app.put to update a house
app.put('/api/houses/:id', updateHouse)

//app.delete to delete a house
app.delete('/api/houses/:id', deleteHouse)

//app.listen
const SERVER_PORT = 4004
app.listen(SERVER_PORT, () => {
    console.log(`Server Port:${SERVER_PORT} is runing`)
})