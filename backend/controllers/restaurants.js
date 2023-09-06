const { Restaurant } = require("../models")

module.exports = {
  index,
  create,
  show, 
  delete: destroy,
};

async function index(req, res) {
  try {
    res.status(200).json(await Restaurant.find());
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function create(req, res) {
  try {
    res.status(201).json(await Restaurant.create(req.body));
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function show(req, res) {
  try {
    res.status(200).json(await Restaurant.findById(req.params.id));
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function destroy(req, res) {
  try {
    res.status(200).json(await Restaurant.findByIdAndDelete(req.params.id));
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

