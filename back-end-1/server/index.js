const express = require('express');
const cors = require('cors') //Cors is a package that allows the client and server to communicate with each other without the need for advanced configuration.
const app = express()//creating  an express aplication and saving it ti app
app.use(express.json()) //set server up too accept JSON object response
app.use(cors())


const friendList = ['Mohamed','Nick','Jennifer','Isir','Misha','Hope',"Nitin", "Eric", "Jeddy", "Cameron", "Riley"]
//create a request for endpoint
app.get('/api/users', (req, res) => {
    res.status(200).send(friendList)
}
)

//create another endpoint that will tell us how the weather is today
app.get('/weather/:temperature', (req, res) => {
    const {temperature} = req.params //object destructing 
    const phrase = `<h3>It was ${temperature} today</h>`
    res.status(200).send(phrase)
})




//set express server to listen to requests on port 4000, test with nodemon
const SERVER_PORT = 4000
app.listen(SERVER_PORT, () => {
    console.log(`up and running on ${SERVER_PORT}`)
})