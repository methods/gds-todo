const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");

// router.use(bodyParser.urlencoded({extended: false}))

router.post("/date-answer", function (req, res) {
	// const toDoDate = req.session.data["date-day"];
	const object = req.body;
	// console.log(req.body[0]);
	const day = object["date-day"];
	const month = object["date-month"];
	const year = object["date-year"];
	const givenDate = `${day}-${month}-${year}`;
	givenDate = new Date(givenDate);
	const currentDate = new Date();

	if (givenDate > currentDate) {
		alert("Given date is in the future");
	} else {
		alert("Given date is in the past");
	}

	// res.redirect("/steps");
});

module.exports = router;

// var GivenDate = "2018-02-22";
// var CurrentDate = new Date();
// GivenDate = new Date(GivenDate);

// if (GivenDate > CurrentDate) {
// 	alert("Given date is greater than the current date.");
// } else {
// 	alert("Given date is not greater than the current date.");
// }
