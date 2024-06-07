const express = require("express");
const Data = require("../models/Data");

const router = express.Router();

router.post("/", (req, res) => {
  const newData = new Data(req.body);
  newData
    .save()
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.get("/", (req, res) => {
  Data.find()
    .then((datas) => res.json(datas))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.patch("/:id", (req, res) => {
  Data.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.delete("/:id", (req, res) => {
  Data.findByIdAndDelete(req.params.id)
    .then(() => res.json({ message: "Deleted Successfully" }))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
