var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log("been a while")
  res.status(200).send(JSON.stringify({"hello":1}));
});

module.exports = router;
