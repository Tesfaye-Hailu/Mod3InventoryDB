const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  price: { type: Number, required: true },
  inventory: { type: Number, required: true },
  nextDelivery: { type: Date, required: true },
  deliveryAmt: { type: Number, required: true },
  name: { type: String, required: true },
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
