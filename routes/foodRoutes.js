const router = require("express").Router();
const { Food, User } = require("../models");
const { populate } = require("../models/User");

router.get("/foods", (req, res) => {
  Food.find()
    .populate("songOwner")
    .then((foods) => res.json(foods))
    .catch((err) => console.error(err));
});

// GET one food
router.get("/foods/:id", (req, res) => {
  Food.findById(req.params.id)
    .then((food) => res.json(food))
    .catch((err) => console.error(err));
});

// POST one food

router.post("/foods", (req, res) => {
  Food.create(req.body)
    .then((food) => {
      User.findByIdAndUpdate(req.body.foodOwner, {
        $push: { foods: food._id },
      }).then((data) => console.log(data));
      res.sendStatus(200);
    })
    .catch((err) => console.error(err));
});

// PUT one food
router.put("/foods/:id", (req, res) => {
  Food.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.sendStatus(200))
    .catch((err) => console.error(err));
});

// DELETE one food
router.delete("/foods/:id", (req, res) => {
  Food.findByIdAndDelete(req.params.id)
    .then(() => res.sendStatus(200))
    .catch((err) => console.error(err));
});

module.exports = router;
