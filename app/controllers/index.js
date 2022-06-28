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

module.exports = isDateValid;
