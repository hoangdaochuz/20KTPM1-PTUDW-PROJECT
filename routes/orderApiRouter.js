const express = require('express')
const router = express.Router()
const {updateStatusController} = require('../controller/orderController')
router.post('/update-status', updateStatusController)

module.exports = router