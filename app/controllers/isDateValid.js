const isDateValid = (object) => {
	const day = object["date-day"];
	const month = object["date-month"];
	const year = object["date-year"];
	if (!day || !month || !year) {
		console.log("ERR: Invalid date");
		return "You must complete all fields";
		} 
	let givenDate = `${day}-${month}-${year}`;
	console.log('Date user input (isDateValid):', givenDate);
	givenDate = new Date(givenDate);
	const currentDate = new Date();

	if (givenDate > currentDate) {
		console.log("ERR: Given date is in the future");
		return "You must enter a valid date"; 
	} else {
		console.log("INFO: Given date is in the past");
		return "/steps";
	}
};

module.exports = isDateValid;