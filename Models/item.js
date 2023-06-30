
const mongoose = require('mongoose')

const inventorySchema = new mongoose.Schema(
    {
        price: {type: Number, required: true},
        inventory: {type: Number, required: true, min: 0},
        nextDelivery:{type: Date},
        deliveryAmt:  {type: Number },
        name: {type: String, required: true}

    },
    {timestamps: true}
);

const Inventory = mongoose.model('Inventory', inventorySchema);

module.exports = Inventory;


