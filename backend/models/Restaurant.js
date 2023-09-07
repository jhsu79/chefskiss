const mongoose = require("mongoose");
const Schema = mongoose.Schema; 

//restaurant Schema w/ parameters
const restaurantSchema = new Schema(
  {
    impressions: [
      {
        type: Schema.Types.ObjectId,
        ref: "Impression",
      },
    ],
    name: { type: String },
    display_address: { type: String },
    categories: [{ type: String }],
    display_phone: { type: String },
    url: { type: String },
    
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Restaurant", restaurantSchema);
