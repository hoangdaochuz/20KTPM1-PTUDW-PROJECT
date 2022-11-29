var express = require('express');
var router = express.Router();
const {viewAnalytics} = require('../controller/analyticsController')
/* GET home page. */
router.get('/', viewAnalytics);

module.exports = router;
