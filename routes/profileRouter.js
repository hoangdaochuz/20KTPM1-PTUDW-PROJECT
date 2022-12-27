const express = require('express')
const profileRouter = express.Router()
const profileController = require('../controller/profileController');
profileRouter.get('/',profileController.showProfile);
profileRouter.get('/change-password', profileController.showChangePassword)
profileRouter.post('/',profileController.editProfile);

module.exports = profileRouter