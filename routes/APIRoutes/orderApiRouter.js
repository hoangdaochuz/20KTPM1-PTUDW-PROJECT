const express = require('express')
const router = express.Router()
const {getOrderApi} = require('../../controller/orderController')
router.get('/:idUser', getOrderApi)

module.exports = router