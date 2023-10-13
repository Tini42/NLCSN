const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    id:{type: String, required: true, unique: true},
    name: {type: String, required: true},
    idCl: {type: String, required: true},
    quantity: {type:Number, require: true},
    price: {type: Number, require: true},
    idM: {type: String, require: true},
    idCo: {type: String, require: true},
    pic:{type: String},
    desc:{type: String}
}, {collection: 'product'})

const Product = mongoose.model('Product',productSchema);
module.exports = Product;