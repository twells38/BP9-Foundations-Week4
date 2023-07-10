const express = require("express"); //bring in express  
const app = express(); //create express application and saving it to a app.
const cors = require("cors"); 

//middlewares use the .use function and every request that comes in goes through this middleware.
app.use(cors());//every request to be accessible
app.use(express.json()) //middle ware to endpoint. 

//mock-data that acgs like a database.
const inventory = ['greeting card', 'wagon', 'computer', 'table', 'chair', 'milk', 'sailboat', 'conditioner', 'rusty nail', 'desk']

//endpoint - get simple endpoint - dont create same endpoint
app.get('/api/inventory', (req, res) => { //req and res object.
    //what you want to do is when user send some query to endpoint the query is include the item in array.
    if (req.query.item) { //if we recieve query is true
        const filteredItems = inventory.filter(invItem => invItem.toLowerCase().includes(req.query.item.toLowerCase()))

        res.status(200).send(filteredItems)
    } else { // if empty string, just send all inventory array
        res.status(200).send(inventory) //everythig put here will send to res.data in frontend.
    }
});
//endpoint with a param
app.get('/api/inventory/:index', (req, res) => {
    console.log(req.params.index)
    res.status(200).send(inventory[+req.params.index]) //any params are string concat with + sign
});



//listen for requests that are coming in
const SERVER_PORT = 5050; //recieve the port request
app.listen(SERVER_PORT, () => console.log(`Server jamming on ${SERVER_PORT}`));