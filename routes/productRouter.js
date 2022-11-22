const express = require('express');
const router = express.Router()
const {getListProduct, showDetail} = require('../controller/productController');

router.get('/', getListProduct)
router.get('/:id',showDetail )

module.exports =router