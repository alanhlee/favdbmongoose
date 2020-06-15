const { Schema, model } = require("mongoose");

module.exports = model(
  "Movie",
  new Schema({
    title: String,
    duration: Number,
    director: String,
    movieOwner: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
  })
);
