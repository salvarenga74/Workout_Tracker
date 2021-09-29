const htmlRoutes = require("express").Router();
const path = require("path");

// GET Routes for displaying stats and editing the daily exercise page
htmlRoutes.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/stats.html"));
});

htmlRoutes.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

module.exports = htmlRoutes;
