const express = require("express");
const router = express.Router();

// Add your routes here - above the module.exports line
let dateObj;

router.post("/date-answers", (req, res) => {
//   dateObj = req.session.data['date-input'];
  
  console.log(req.session.data);
  res.redirect('/steps')
});

module.exports = router;
