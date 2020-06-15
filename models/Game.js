const { Schema, model } = require("mongoose");

module.exports = model(
  "Game",
  new Schema({
    title: String,
    developer: String,
    genre: String,
    gameOwner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  })
);
