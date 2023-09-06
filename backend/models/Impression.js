const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//impression Schema w/ parameters
const impressionSchema = new Schema(
  {
    parentId: {
      type: Schema.Types.ObjectId,
      ref: "Restaurant",
    },
    ambiance: {
      type: Number,
      min: 1,
      max: 5,
      default: 3,
    },
    cleanliness: {
      type: Number,
      min: 1,
      max: 5,
      default: 3,
    },
    service: {
      type: Number,
      min: 1,
      max: 5,
      default: 3,
    },
    favDishes: {
      type: String,
    },
    comments: {
      type: String,
    },
    revisit: {
      type: Boolean,
    },
    futureVisit: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Impression", impressionSchema);
