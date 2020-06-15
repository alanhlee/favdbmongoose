const router = require("express").Router();
// const { join } = require()

router.get('/', (req, res) => {
  res.sendFile('index.html')
})

module.exports = router