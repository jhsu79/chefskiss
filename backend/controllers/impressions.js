const { Restaurant } = require("../models");

module.exports = {
    create, 
}
async function create (req, res) {
    const restaurant = await Restaurant.findById(req.params.id)
    restaurant.impression.push(req.body) 
try {
    await restaurant.save()
} catch (err) {
    console.log(err)
}
}
