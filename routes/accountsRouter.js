var express = require('express');
var router = express.Router();
const {viewAccounts, viewDetailAccount, updateStatusAccount} = require('../controller/accountsController')


router.get('/', viewAccounts);
router.get('/detail/:id', viewDetailAccount)
router.post('/update-status', updateStatusAccount)
module.exports = router;
