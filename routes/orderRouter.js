const express = require('express')
const router = express.Router();
const {getOrders, getDetailOrder} = require('../controller/orderController')
router.get('/', getOrders)
router.get('/detail/:idOrder', getDetailOrder)

module.exports = router