module.exports = require("mongoose").connect("mongodb://localhost/favoritedb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
