const User = require("../models/User");

module.exports = {
  show,
  create,
};

async function create(req, res) {
    try {
        console.log(req.body)
      res.status(201).json(await User.create(req.body));
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

async function show(req, res) {
  try {
    res.status(200).json(await User.findById(req.params.id));
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}