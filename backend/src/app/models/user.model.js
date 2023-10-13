const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username:{type: String, required: true, unique: true},
    password: {type: String, required: true},
    name: {type: String, required: true},
    role: {type: Boolean, default: false},
    address: {type: String},
    phone: {type: String}
    // refreshToken: {type: String}
}, {collection: 'user'})

const User = mongoose.model('User',userSchema);
module.exports = User;