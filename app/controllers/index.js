const isDateValid = (object) => {
	const day = object["date-day"];
	const month = object["date-month"];
	const year = object["date-year"];
	let givenDate = `${day}-${month}-${year}`;
	console.log(givenDate);
	givenDate = new Date(givenDate);
	const currentDate = new Date();

	if (givenDate > currentDate) {
		console.log("ERR: Given date is in the future");
		return "/date-err";
	} else {
		console.log("INFO: Given date is in the past");
		return "/steps";
	}
};

// routing and 404 error page handling

const homeView = (req, res) => {
	res.render("index");
};

const wellbeingView = (req, res) => {
	console.log('hello')
	// res.render("wellbeing");
};

const dateView = (req, res) => {
	res.render("date");
};

const dateErrorView = (req, res) => {
	res.render("date-err");
};

const stepsView = (req, res) => {
	res.render("steps");
};

const waterIntakeView = (req, res) => {
	res.render("water-intake");
};

const fiveAdayView = (req, res) => {
	res.render("5-a-day");
};

const checkAnswersView = (req, res) => {
	res.render("check-answers");
};

const confirmationView = (req, res) => {
	res.render("confirmation");
};

//The 404 Route (ALWAYS Keep this as the last route)
const errorPageView = (req, res) => {
	res.status(404).render("404");
};

// module.exports = homeView;
module.exports = isDateValid;
// module.exports = wellbeingView;
// module.exports = dateView;
// module.exports = dateErrorView;
// module.exports = stepsView;
// module.exports = waterIntakeView;
// module.exports = fiveAdayView;
// module.exports = checkAnswersView;
// module.exports = confirmationView;
// module.exports = errorPageView;
