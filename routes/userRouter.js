var express = require('express');
var router = express.Router();
const { upload } = require('../middlewares/uploader');

const {viewUserProfile, viewUserActivity, viewUserProfileSettings, viewUserAccountSettings, updateProfile} = require('../controller/userController')
/* GET home page. */
router.get('/', viewUserProfile);
router.get('/activities', viewUserActivity);
router.route('/profile-settings/:id').get(viewUserProfileSettings).post(upload.single('image'), updateProfile)
router.get('/account-settings', viewUserAccountSettings);
module.exports = router;
