const express = require("express");
// const app = require('../server')
const router = express.Router();

const isDateValid = require("./controllers/isDateValid");
// router.use(wellbeingView)

router.post("/todo/wellbeing-todo/date-err", function (req, res) {
  // console.log(req.body)
  const object = req.body;
  const endpoint = isDateValid(object);
  if(endpoint === '/steps') {
    return res.redirect('steps')
  } 
  res.render('date-err');
});

// router.get("/todo", homeView);
router.get("/", (req, res) => {
  res.status(200).redirect("index");
});

// router.get("/todo/wellbeing-todo", wellbeingView);
router.get("/todo/wellbeing-todo", function (req, res) {
  res.render("wellbeing");
});

// router.get("/todo/wellbeing-todo/date", dateView);
router.get("/todo/wellbeing-todo/date", function (req, res) {
  res.render("date");
});

// router.get("/todo/wellbeing-todo/date-err", dateErrorView);
router.get("/todo/wellbeing-todo/date-err", function (req, res) {
  res.render("date-err");
});
router.get("/todo/wellbeing-todo/date-invalid", function (req, res) {
  res.render("date-invalid");
});

// router.get("/todo/wellbeing-todo/steps", stepsView);
router.get("/todo/wellbeing-todo/steps", function (req, res) {
  res.render("steps");
});

// router.get("/todo/wellbeing-todo/water-intake", waterIntakeView);
router.get("/todo/wellbeing-todo/water-intake", function (req, res) {
  res.render("water-intake");
});

// router.get("/todo/wellbeing-todo/5-a-day", fiveAdayView);
router.get("/todo/wellbeing-todo/5-a-day", function (req, res) {
  res.render("5-a-day");
});

// router.get("/todo/wellbeing-todo/check-answers", checkAnswersView);
router.get("/todo/wellbeing-todo/check-answers", function (req, res) {
  res.render("check-answers");
});

// router.get("/todo/wellbeing-todo/confirmation", confirmationView);
router.get("/todo/wellbeing-todo/confirmation", function (req, res) {
  res.render("confirmation");
});

// router.get("/todo/wellbeing-todo/404", errorPageView);
router.get("/todo/wellbeing-todo/404", function (req, res) {
  res.render("404");
});

module.exports = router;
// module.exports = app;

// const homeView = require("./controllers");
// const wellbeingView = require("./controllers/index.js");
// const dateView = require("./controllers");
// const dateErrorView = require("./controllers");
// const stepsView = require("./controllers");
// const waterIntakeView = require("./controllers");
// const fiveAdayView = require("./controllers");
// const checkAnswersView = require("./controllers");
// const confirmationView = require("./controllers");
// const errorPageView = require("./controllers");
