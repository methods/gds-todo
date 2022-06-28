const express = require("express");
const router = express.Router();
// const app = express();

// Date validation
router.post("/date-answer", function (req, res) {
	const object = req.body;
	const day = object["date-day"];
	const month = object["date-month"];
	const year = object["date-year"];
	let givenDate = `${day}-${month}-${year}`;
	console.log(givenDate);
	givenDate = new Date(givenDate);
	const currentDate = new Date();

	if (givenDate > currentDate) {
		console.log("Given date is in the future");
		res.redirect("/date-err");
	} else {
		console.log("Given date is in the past");
		res.redirect("/steps");
	}
});



router.get("/", function (req, res) {
	res.render("index");
});

// 404 error page handling
router.get("/wellbeing", function (req, res) {
	res.render("wellbeing");
});

router.get("/date", function (req, res) {
	res.render("date");
});
router.get("/date-err", function (req, res) {
	res.render("date-err");
});

router.get("/steps", function (req, res) {
	res.render("steps");
});

router.get("/water-intake", function (req, res) {
	res.render("water-intake");
});

router.get("/5-a-day", function (req, res) {
	res.render("5-a-day");
});

router.get("/check-answers", function (req, res) {
	res.render("check-answers");
});
router.get("/confirmation-page", function (req, res) {
	res.render("confirmation-page");
});

//The 404 Route (ALWAYS Keep this as the last route)
router.get(function (req, res) {
	res.status(404).render("404");
});
// router.use(function (req, res) {
// 	res.status(404).render("404");
// });

module.exports = router;
