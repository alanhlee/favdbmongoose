const { Schema, model } = require("mongoose");

module.exports = model(
  "Food",
  new Schema({
    name: String,
    origin: String,
    foodOwner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  })
);
