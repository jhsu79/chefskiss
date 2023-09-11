const { Restaurant } = require("../models");

module.exports = {
    create, 
}

async function create(req, res) {
    const restaurant = await Restaurant.findById(req.params.id)
    restaurant.impression = req.body 
    try {
      console.log(req.body);
      res.status(201).json(await restaurant.save());
    } catch (error) {
      console.log(error);
      res.status(400).json({ error: error.message });
    }
  }