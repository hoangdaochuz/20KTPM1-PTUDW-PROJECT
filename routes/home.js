var express = require('express');
var router = express.Router();
const {home} = require('../controller/homeController')
/* GET home page. */
router.get('/', home);

module.exports = router;
