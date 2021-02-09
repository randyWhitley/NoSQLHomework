const { Workout } = require("../models");
const express = require ("express");

module.exports = function (app) {
  app.get("/api/workout", function (req, res) {
    Workout.find()
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  app.get("/favicon.ico", function (req, res) {
    Workout.find()
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  app.get("/api/workout/range", (req, res) => {
    Workout.find()
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  app.post("/api/workout", function (req, res) {
    Workout.create({})
      .then((data) => res.json(data))
      .catch((err) => {
        res.json(err);
      });
  });

  app.put("/api/workout/:id", (req, res) => {
    const id = req.params.id;
    const workout = req.body;
    Workout.findByIdAndUpdate(id, { $push: { exercises: workout } }, { new: true })
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.send(err);
      });
  });
};
