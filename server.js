const express = require("express");
const app = express();
const { join } = require('path')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(join(__dirname, 'public')))
app.use(require("./routes"));

require("./config")
  .then(() => app.listen(3000))
  .catch((err) => console.error(err));
