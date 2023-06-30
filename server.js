const express = require('express');
const dotenv = require('dotenv');
dotenv.config(); 
require('./config/database')
const port = 4000;
const Inventory = require('./Models/item');


const app = express();
app.use(express.json())

app.post('/create_item', async(req,res) => {
    const createdItem = await Inventory.create(req.body) 
    console.log(createdItem);
    res.send(createdItem)

}) 

app.get('/items', async(req,res) =>{
    const allItems = await Inventory.find({});
    res.send(allItems)
})






app.listen(port, () => {
console.log(`the server is listening at ${port}!`)}
)
