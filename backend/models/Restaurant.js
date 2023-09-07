const mongoose = require("mongoose");
const Schema = mongoose.Schema; 

//restaurant Schema w/ parametershttps://desktop.postman.com/?desktopVersion=10.17.4&userId=28828738&teamId=0
const restaurantSchema = new Schema(
  {
    impression: [
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
