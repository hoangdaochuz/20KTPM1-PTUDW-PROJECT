const express = require('express')
const router = express.Router()
const {getOrderApi, addOrderApi} = require('../../controller/orderController')
router.get('/:idUser', getOrderApi)
router.post('/add', addOrderApi)

module.exports = router