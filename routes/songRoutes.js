const router = require("express").Router();
const { Song, User } = require("../models");
const { populate } = require("../models/User");

router.get("/songs", (req, res) => {
  Song.find()
    .populate('songOwner')
    .then((songs) => res.json(songs))
    .catch((err) => console.error(err));
});

// GET one song
router.get("/songs/:id", (req, res) => {
  Song.findById(req.params.id)
    .then((song) => res.json(song))
    .catch((err) => console.error(err));
});

// POST one song

router.post("/songs", (req, res) => {
  Song.create(req.body)
    .then((song) => {
      User.findByIdAndUpdate(req.body.songOwner, {
        $push: { songs: song._id },
      }).then((data) => console.log(data));
      res.sendStatus(200);
    })
    .catch((err) => console.error(err));
});

// PUT one song
router.put("/songs/:id", (req, res) => {
  Song.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.sendStatus(200))
    .catch((err) => console.error(err));
});

// DELETE one song
router.delete("/songs/:id", (req, res) => {
  Song.findByIdAndDelete(req.params.id)
    .then(() => res.sendStatus(200))
    .catch((err) => console.error(err));
});

module.exports = router;