var express = require('express');
var router = express.Router();
const {viewAccounts, viewDetailAccount} = require('../controller/accountsController')


router.get('/', viewAccounts);
router.get('/detail/:id', viewDetailAccount)
module.exports = router;
