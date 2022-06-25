const express = require("express");
const router = express.Router();

// Add your routes here - above the module.exports line
// let dateObj;

// router.post("/date-answers", (req, res) => {
// //   dateObj = req.session.data['date-input'];
// let data = req.session.data["date-input"];
//   console.log(req.session.data);
//   res.redirect('/steps')
// });

router.post("/steps", (req, res) => {
  // let {day, month, year} = req.body;
  let date = req.body
  console.log(typeof date, date);
  let {date-input-day, date-input-month, date-input-year } = date
  // return res.send()
  /**
   * let {date-input-day, date-input-month, date-input-year } = date
   * 'date-input-day': '2',
  'date-input-month': '3',
  'date-input-year': '6'
   */
});

module.exports = router;
