const mongoose = require("mongoose");
const Schema = mongoose.Schema; 

const restaurantSchema = new Schema(
  {

    name: { type: String },
    categories: [{ type: String }],
    display_phone: { type: String },
    display_address0: {type: String},
    display_address1: {type: String},
    url: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Restaurant", restaurantSchema);
