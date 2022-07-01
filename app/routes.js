const express = require("express");
const router = express.Router();

const {
  homeView,
  wellbeingView,
  dateView,
  dateErrView,
  stepsView,
  waterIntakeView,
  fiveAdayView,
  checkAnswersView,
  confirmationView,
  errorPageView,
} = require("../app/controllers/controller");

router.get("/todo", homeView);
router.get("/todo/wellbeing-todo", wellbeingView);
router.get("/todo/wellbeing-todo/date", dateView);
router.post("/todo/wellbeing-todo/date-err", dateErrView);
router.get("/todo/wellbeing-todo/steps", stepsView);
router.get("/todo/wellbeing-todo/water-intake", waterIntakeView);
router.get("/todo/wellbeing-todo/5-a-day", fiveAdayView);
router.get("/todo/wellbeing-todo/check-answers", checkAnswersView);
router.get("/todo/wellbeing-todo/confirmation", confirmationView);
router.get("/todo/wellbeing-todo/content", (req, res) => {
  res.render("content");
});
router.get("/todo/wellbeing-todo/404", errorPageView);

module.exports = router;
