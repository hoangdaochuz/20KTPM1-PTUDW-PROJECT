const express = require('express')
const router = express.Router()
const {addCategoryController, updateCategoryController,getAllCategoriesController} = require('../controller/categoryController')
router.get('/',getAllCategoriesController)
router.post('/', addCategoryController)
router.post('/update', updateCategoryController)

module.exports = router