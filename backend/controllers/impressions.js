const { Impression } = require("../models");

module.exports = {
  create,
  delete: destroy,
  show,
  edit,
  update,
};

//create functions for CRUD
async function create(req, res) {
  try {
    res.status(201).json(await Impression.create(req.body));
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

//show function for CRUD
async function show(req, res) {
  try {
    res.status(200).json(await Impression.findById(req.params.id));
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

//update function for CRUD
async function update(req, res) {
  try {
    res
      .status(200)
      .json(
        await Impression.findByIdAndUpdate(req.params.id, req.body, { new: true })
      );
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

//edit function for CRUD
async function edit(req, res) {
  try {
    res
      .status(200)
      .json(
        await Impression.findByIdAndUpdate(req.params.id, req.body, { new: true })
      );
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

//delete function for CRUD
async function destroy(req, res) {
  try {
    res.status(200).json(await Impression.findByIdAndDelete(req.params.id));
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
