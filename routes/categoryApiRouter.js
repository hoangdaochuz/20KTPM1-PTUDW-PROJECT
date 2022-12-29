const express = require('express')
const router = express.Router()
const {addCategoryController, updateCategoryController} = require('../controller/categoryController')
router.post('/', addCategoryController)
router.post('/update', updateCategoryController)

module.exports = router