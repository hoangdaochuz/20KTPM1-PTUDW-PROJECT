const express = require('express');
const router = express.Router()

const {viewRevenues, viewRevenuesByDay} = require('../controller/revenueController')

router.get('/', viewRevenues);
// router.get('/tops', viewTopRevenues);

module.exports = router;