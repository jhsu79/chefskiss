const mongoose = require("mongoose");
const { Restaurant } = require(".");

const restaurantSchema = new mongoose.Schema(
  {
    impressions: [
      {
        type: Schema.Types.ObjectId,
        ref: "Impressions",
      },
    ],
    name: { type: String },
    location: { type: String },
    cuisine: { type: String },
    phoneNumber: { type: String },
    restaurantLink: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Restaurant", restaurantSchema);
