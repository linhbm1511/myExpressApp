var express = require('express');
var router = express.Router();
var listStaff = require('../controller/indexController');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/staff', listStaff.list_all_staff);
module.exports = router;
