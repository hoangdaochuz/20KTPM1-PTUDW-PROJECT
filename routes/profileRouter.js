const express = require('express')
const profileRouter = express.Router()
const profileController = require('../controller/profileController')
profileRouter.get('/',profileController.showProfile);
profileRouter.post('/',profileController.editProfile);

module.exports = profileRouter