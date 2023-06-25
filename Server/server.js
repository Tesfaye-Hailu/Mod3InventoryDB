const express = require('express');
const Model = require('../Model/items'); // Path to your item.js file
const db = require('../DataBase/database');// Path to your database.js file

const app = express();
app.use(express.json());

// Create a new item
app.post('/items', (req, res) => {
  const newItem = req.body;
  Item.create(newItem)
    .then((item) => {
      res.status(201).json(item);
    })
    .catch((error) => {
      res.status(500).json({ error: 'Failed to create the item' });
    });
});

// Get all items
app.get('/items', (req, res) => {
  Item.find()
    .then((items) => {
      res.json(items);
    })
    .catch((error) => {
      res.status(500).json({ error: 'Failed to retrieve items' });
    });
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});