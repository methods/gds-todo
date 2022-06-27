const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");

// router.use(bodyParser.urlencoded({extended: false}))

router.post("/date-answer", function (req, res) {
  // const toDoDate = req.session.data["date-day"];
  const object = req.body;
  // console.log(req.body);
  const day = object["date-day"];
  const month = object["date-month"];
  const year = object["date-year"];
  let givenDate = `${day}-${month}-${year}`;
  console.log(givenDate);
  givenDate = new Date(givenDate);
  const currentDate = new Date();

  if (givenDate > currentDate) {
      console.log("Given date is in the future");
      res.redirect('/date-err')
    
  } else {
    console.log("Given date is in the past");
    res.redirect('/steps')
}

});

module.exports = router;

