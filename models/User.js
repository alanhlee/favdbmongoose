const { model, Schema } = require("mongoose");

const User = new Schema({
  name: String,
  email: String,
  username: String,
  movies: [
    {
      type: Schema.Types.ObjectId,
      ref: "Movie",
    },
  ],
  games: [
    {
      type: Schema.Types.ObjectId,
      ref: "Game",
    },
  ],
  foods: [
    {
      type: Schema.Types.ObjectId,
      ref: "Food",
    },
  ],
  songs: [
    {
      type: Schema.Types.ObjectId,
      ref: "Song",
    },
  ]
})

module.exports = model("User", User);
