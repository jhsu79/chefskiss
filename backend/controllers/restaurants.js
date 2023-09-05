const { Restaurant } = require("../models")
const { Impression } = require("../models")

module.exports = {
  index,
  create,
  show,
  savedRest, 
  delete: destroy,
};

async function index(req, res) {
  try {
    res.status(200).json(await Event.find());
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function create(req, res) {
  try {
    res.status(201).json(await Event.create(req.body));
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function show(req, res) {
  try {
    res.status(200).json(await Event.findById(req.params.id));
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function savedRest(req, res) {
  try {
    res
      .status(200)
      .json(
        await Event.find({}).sort({ceatedAt: -1}));
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function destroy(req, res) {
  try {
    res.status(200).json(await Event.findByIdAndDelete(req.params.id));
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}


