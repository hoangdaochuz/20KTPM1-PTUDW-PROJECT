var express = require('express');
var router = express.Router();
const {viewDashboard} = require('../controller/dashboardController')
/* GET home page. */
router.get('/',viewDashboard);

module.exports = router;
