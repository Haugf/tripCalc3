var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {


  let camperOne_name = req.query.camperOne_name
  let camperOne_total = parseFloat(req.query.camperOne_total)
  let camperTwo_name = req.query.camperTwo_name
  let camperTwo_total = parseFloat(req.query.camperTwo_total)
  let camperThree_name = req.query.camperThree_name
  let camperThree_total = parseFloat(req.query.camperThree_total)



  let grandTotal = camperOne_total + camperTwo_total + camperThree_total;

  let splitTotal = grandTotal / 3;

  let camperOne_owes = splitTotal - camperOne_total;
  let camperTwo_owes = splitTotal - camperTwo_total;
  let camperThree_owes = splitTotal - camperThree_total;

  res.status(200).send({
  "grandTotal": grandTotal,
  "camperOne_name": camperOne_name,
  "camperOne_owes": camperOne_owes,
  "camperTwo_name": camperTwo_name,
  "camperTwo_owes": camperTwo_owes,
  "camperThree_name": camperThree_name,
  "camperThree_owes": camperThree_owes
});
});

module.exports = router;
