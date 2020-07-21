const express = require("express");
const router = express.Router();
const User = require("../../model/index");

router.get("/", (req, res) => {
  User.find()
    .sort({ date: -1 })
    .then((item) => res.json(item));
});

router.post("/", (req, res) => {
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    description: req.body.description,
  });

  newUser.save().then((item) => res.json(item));
});

router.delete("/:id", (req, res) => {
  User.findById(req.params.id).then((item) =>
    item.remove().then(res.json({ message: "deleted" }))
  );
});

router.put("/:id", (req, res) => {
  User.findById(req.params.id).then((item) =>
    item.update(req.body).then(res.json({ message: "updated" }))
  );
});

module.exports = router;
