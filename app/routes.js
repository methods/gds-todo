const express = require("express");
const isDateValid = require("./controllers/index");
const router = express.Router();
// const app = express();

// Date validation
router.post("/date-answer", function (req, res) {
	const object = req.body;
	const url = isDateValid(object);
	res.redirect(url);
});

router.get("/todo", function (req, res) {
	res.render("index");
});

// 404 error page handling
router.get("/todo/wellbeing-todo", function (req, res) {
	res.render("wellbeing");
});

router.get("/todo/wellbeing-todo/date", function (req, res) {
	res.render("date");
});
router.get("/todo/wellbeing-todo/date-err", function (req, res) {
	res.render("date-err");
});

router.get("/todo/wellbeing-todo/steps", function (req, res) {
	res.render("steps");
});

router.get("/todo/wellbeing-todo/water-intake", function (req, res) {
	res.render("water-intake");
});

router.get("/todo/wellbeing-todo/5-a-day", function (req, res) {
	res.render("5-a-day");
});

router.get("/todo/wellbeing-todo/check-answers", function (req, res) {
	res.render("check-answers");
});
router.get("/todo/wellbeing-todo/confirmation", function (req, res) {
	res.render("confirmation");
});

//The 404 Route (ALWAYS Keep this as the last route)
router.get(function (req, res) {
	res.status(404).render("404");
});
// router.use(function (req, res) {
// 	res.status(404).render("404");
// });

module.exports = router;
