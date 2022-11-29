var express = require('express');
var router = express.Router();
const {viewUserProfile, viewUserActivity, viewUserProfileSettings, viewUserAccountSettings} = require('../controller/userController')
/* GET home page. */
router.get('/', viewUserProfile);
router.get('/activities', viewUserActivity);
router.get('/profile-settings', viewUserProfileSettings);
router.get('/account-settings', viewUserAccountSettings);
module.exports = router;
