const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const restaurantSchema = new Schema(
  {
    name: { type: String },
<<<<<<< HEAD
=======
    // categories: [{ type: String }],
>>>>>>> 85d1c9a3dd2912265efe99cff1ef84d3c0e745d7
    display_phone: { type: String },
    display_address0: { type: String },
    display_address1: { type: String },
    url: { type: String },
    rating: { type: Number },
    price: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Restaurant", restaurantSchema);
