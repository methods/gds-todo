const isDateValid = require("./isDateValid");

exports.homeView = (req, res) => {
	res.render("index");
};

exports.wellbeingView = (req, res) => {
	// console.log('hello')
	res.render("wellbeing");
};

exports.dateView = (req, res) => {
	res.render("date");
};

exports.dateErrView = (req, res) => {
	
	const object = req.body;
	const endpoint = isDateValid(object);
	if(endpoint === '/steps') {
	  return res.redirect('steps')
	} 
	res.render('date-err');
};

exports.stepsView = (req, res) => {
	res.render("steps");
};

exports.waterIntakeView = (req, res) => {
	res.render("water-intake");
};

exports.fiveAdayView = (req, res) => {
	res.render("5-a-day");
};

exports.checkAnswersView = (req, res) => {
	res.render("check-answers");
};

exports.confirmationView = (req, res) => {
	res.render("confirmation");
};

//The 404 Route (ALWAYS Keep this as the last route)
exports.errorPageView = (req, res) => {
	res.status(404).render("404");
};

// module.exports = homeView;

// module.exports = wellbeingView;
// module.exports = dateView;
// module.exports = dateErrorView;
// module.exports = stepsView;
// module.exports = waterIntakeView;
// module.exports = fiveAdayView;
// module.exports = checkAnswersView;
// module.exports = confirmationView;
// module.exports = errorPageView;
