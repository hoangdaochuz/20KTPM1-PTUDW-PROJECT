const express = require('express')
const aboutRouter = express.Router()
const aboutController = require('../controller/aboutController')
aboutRouter.get('/', aboutController.about)

module.exports = {aboutRouter}
