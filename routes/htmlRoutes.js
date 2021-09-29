const htmlRoutes = require("express").Router();
const path = require("path");

// GET Routes for HTML Notes & index page
htmlRoutes.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/stats.html"));
});

// catch all is star
htmlRoutes.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "/index.html"))
);

module.exports = htmlRoutes;
