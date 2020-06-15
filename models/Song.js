const { Schema, model } = require("mongoose");

module.exports = model(
  "Song",
  new Schema({
    title: String,
    duration: Number,
    artist: String,
    songOwner: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  })
);
