const express = require('express')
const router = express.Router();
const {getListOrder, getOrderDetail} = require('../controller/orderController')
router.get('/:idUser', getListOrder);
router.get('/detail/:idOrder', getOrderDetail);

module.exports = router