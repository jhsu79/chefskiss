const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
    name: String, 
    location: String, 
    cuisine: String, 
    phoneNumber: String, 
    restaurantLink: String, 
}, {
    timestamps: true
})

module.exports = mongoose.model('Restaurant', restaurantSchema)