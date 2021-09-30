const router = require("express").Router();
const { Workouts } = require("../models/index.js");

// GET route for api/workouts
router.get("/workouts", (req, res) => {
  Workouts.aggregate([
    {
      $addFields: {
        totalDuration: { $sum: "$exercises.duration" },
      },
    },
  ])
    .then((exerciseData) => {
      res.json(exerciseData);
    })
    .catch((err) => {
      res.json(err);
    });
});

// PUT route for api/workouts/ ID
router.put("/workouts/:_id", (req, res) => {
  Workouts.findByIdAndUpdate(
    req.params._id,
    { $push: { exercises: req.body } },
    { new: true }
  )
    .then((updatedExercise) => {
      res.json(updatedExercise);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

// POST route for api/workouts/ creates new workout
router.post("/workouts", ({ body }, res) => {
  console.log(body);
  Workouts.create(body)
    .then((EmptyData) => {
      res.json(EmptyData);
    })
    .catch((err) => {
      console.error(err);
    });
});

// GET by Range route, api/workouts/range get workouts in past 7 days range
// Workouts.find({})
// .sort({ day: -1 })
// .limit(7)

router.get("/workouts/range", (req, res) => {
  console.log(req.body);
  Workouts.aggregate([
    {
      $addFields: {
        totalDuration: { $sum: "$exercises.duration" },
      },
    },
  ])
    .sort({ day: -1 })
    .limit(7)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.error(err);
    });
});

module.exports = router;
