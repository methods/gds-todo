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
// module.exports = isDateValid;
// module.exports = wellbeingView;
// module.exports = dateView;
// module.exports = dateErrorView;
// module.exports = stepsView;
// module.exports = waterIntakeView;
// module.exports = fiveAdayView;
// module.exports = checkAnswersView;
// module.exports = confirmationView;
// module.exports = errorPageView;
