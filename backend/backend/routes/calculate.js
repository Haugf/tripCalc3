var express = require('express');
var router = express.Router();
const { check, validationResult } = require('express-validator');

/* GET users listing. */
router.get('/', [
  check('camperOne_total', 'Enter a valid total').isFloat(),
  check('camperTwo_total', 'Enter a valid total').isFloat(),
  check('camperThree_total', 'Enter a valid total').isFloat()
],function(req, res, next) {

  // TODO: Add validators
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  let camperOne_name = req.query.camperOne_name
  let camperOne_total = parseFloat(req.query.camperOne_total)
  let camperTwo_name = req.query.camperTwo_name
  let camperTwo_total = parseFloat(req.query.camperTwo_total)
  let camperThree_name = req.query.camperThree_name
  let camperThree_total = parseFloat(req.query.camperThree_total)


  let grandTotal = camperOne_total + camperTwo_total + camperThree_total;

  let splitTotal = Math.round(100*(grandTotal / 3))/100;

  let camperOne_owes = Math.round(100*(splitTotal - camperOne_total))/100;
  let camperTwo_owes = Math.round(100*(splitTotal - camperTwo_total))/100;
  let camperThree_owes = Math.round(100*(splitTotal - camperThree_total))/100;

  res.status(200).send({
  "splitTotal": splitTotal,
  "camperOne_name": camperOne_name,
  "camperOne_owes": camperOne_owes,
  "camperTwo_name": camperTwo_name,
  "camperTwo_owes": camperTwo_owes,
  "camperThree_name": camperThree_name,
  "camperThree_owes": camperThree_owes
});
});

module.exports = router;
