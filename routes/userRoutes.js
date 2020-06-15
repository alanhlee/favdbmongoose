const router = require("express").Router();
const { User } = require("../models");

router.get("/users/all", (req, res) => {
  User.find()
    .then((user) => res.json(user))
    .catch((err) => console.error(err));
});

router.get("/users/:id", (req, res) => {
  User.findById(req.params.id)
    .populate(["movies", "songs"])
    // .populate('songs')
    .then((user) => res.json(user))
    .catch((err) => console.error(err));
});

router.post("/users", (req, res) => {
  User.create(req.body)
    .then((user) => res.json(user))
    .catch((err) => console.error(err));
});

module.exports = router;