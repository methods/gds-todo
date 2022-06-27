const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser')

// router.use(bodyParser.urlencoded({extended: false}))

router.post("/date-answer", function (req, res) {
	// const toDoDate = req.session.data["date-day"];
const object = req.body
	// console.log(req.body[0]);
    const day = object['date-day']
    const month = object['date-month']
    const year = object['date-year']
	console.log(day, month, year);
	res.redirect("/steps");
});

module.exports = router;
