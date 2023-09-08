const { Restaurant } = require("../models");

module.exports = {
  index,
  create,
  show,
  delete: destroy,
};

//index function for CRUD
async function index(req, res) {
  try {
    res.status(200).json(await Restaurant.find());
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

//create function for CRUD
async function create(req, res) {
  try {
    console.log(req.body);
    res.status(201).json(await Restaurant.create(req.body));
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
}

//show function for CRUD
async function show(req, res) {
  try {
    res.status(200).json(await Restaurant.findById(req.params.id));
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

//delete function for CRUD
async function destroy(req, res) {
  try {
    res.status(200).json(await Restaurant.findByIdAndDelete(req.params.id));
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
