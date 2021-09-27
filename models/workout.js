const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  exercises: [
    {
      type: { required: true, type: String },
      name: { required: true, type: String },
      duration: { required: true, type: Number },
      weight: Number,
      reps: Number,
      sets: Number,
      distance: Number,
    },
  ],
});

const Workouts = mongoose.model("Workouts", WorkoutSchema);

module.exports = Workouts;
