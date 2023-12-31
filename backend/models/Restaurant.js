const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const impressionSchema = new Schema(
  {
    impression: { type: String },
  },
  { timestamps: true }
);

const restaurantSchema = new Schema(
  {
    name: { type: String },
    display_phone: { type: String },
    display_address0: { type: String },
    display_address1: { type: String },
    url: { type: String },
    impression: { type: impressionSchema },
    rating: { type: Number },
    price: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Restaurant", restaurantSchema);
