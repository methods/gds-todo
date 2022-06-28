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

// 404 error page handling
router.get("/", function (req, res) {
	res.render("wellbeing");
});

router.get("/steps", function (req, res) {
	res.render("wellbeing");
});

//The 404 Route (ALWAYS Keep this as the last route)
router.get("*", function (req, res) {
	res.render("404");
});

module.exports = router;
