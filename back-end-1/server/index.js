const express = require('express');
const cors = require('cors') //Cors is a package that allows the client and server to communicate with each other without the need for advanced configuration.
const app = express()//Create a variable called app and set its value equal to express invoked
app.use(express.json()) //set server up too accept JSON object response so client and server will be communicate by sending and recieving JSON objects to each other
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
    const phrase = `<h3>It was ${temperature} today</h>` //req.params.temperature
    res.status(200).send(phrase)
})




//set express server to listen to requests on port 4000, test with nodemon
const SERVER_PORT = 4000
app.listen(SERVER_PORT, () => {
    console.log(`up and running on ${SERVER_PORT}`)
})


// Create a folder called server
// Inside the server folder create an index.js file
// Use npm to install express, then require it at the top of your index.js file
// Create a variable called app and set its value equal to express invoked
// Set your server up to accept JSON object responses
// Set your express server to listen to requests on port 4000, test with nodemon
// Create a get request for the endpoint ‘/api/users’ and another to get weather information
// Start your server up and check its functionality using the given HTML file
