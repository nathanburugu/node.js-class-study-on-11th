/** @format */

const express = require("express");
const routes = express.Router();
const Studentz = require("../models/students");
routes.get("/students", (req, res) => {
  res.send({ type: "Get Request" });
});
// routes.post("/students", (req, res) => {
//   res.send({ type: "" });
// });

routes.post("/students", (req, res) => {
  Studentz.create(req.body).then((student) => {
    res.send(student);
  });
});
routes.delete("/students/:id", (req, res, next) => {
  Studentz.findByIdAndRemove({ _id: req.params.id }).then((student) => {
    res.send(student);
  });
});
routes.post("students", (req, res, next) => {
  Studentz.create(req.body)
    .then((student) => {
      res.send(student);
    })
    .catch(next);
});
module.exports = routes;
