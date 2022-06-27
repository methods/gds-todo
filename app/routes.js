const express = require("express");
const router = express.Router();

router.post("/date-answer", function (req, res) {
	const toDoDate = req.session.data["date-day"];

	console.log(toDoDate);
	res.redirect("/steps");
});

module.exports = router;
