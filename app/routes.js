const express = require("express");
const router = express.Router();

const isDateValid = require("./controllers/index");
const homeView = require("./controllers");
const wellbeingView = require("./controllers");
const dateView = require("./controllers");
const dateErrorView = require("./controllers");
const stepsView = require("./controllers");
const waterIntakeView = require("./controllers");
const fiveAdayView = require("./controllers");
const checkAnswersView = require("./controllers");
const confirmationView = require("./controllers");
const errorPageView = require("./controllers");

// Date validation
router.post("/date-answer", function (req, res) {
	const object = req.body;
	const url = isDateValid(object);
	res.redirect(url);
});

router.get("/todo", homeView);

router.get("/todo/wellbeing-todo", wellbeingView);

router.get("/todo/wellbeing-todo/date", dateView);

router.get("/todo/wellbeing-todo/date-err", dateErrorView);

router.get("/todo/wellbeing-todo/steps", stepsView);

router.get("/todo/wellbeing-todo/water-intake", waterIntakeView);

router.get("/todo/wellbeing-todo/5-a-day", fiveAdayView);

router.get("/todo/wellbeing-todo/check-answers", checkAnswersView);

router.get("/todo/wellbeing-todo/confirmation", confirmationView);

router.get("/todo/wellbeing-todo/404", errorPageView);

module.exports = router;
