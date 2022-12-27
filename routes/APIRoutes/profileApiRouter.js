const express = require('express')
const profileApiRouter = express.Router();

const profileController = require('../../controller/profileController')
const { upload } = require('../../middleware/uploader');

profileApiRouter.route("/update-avatar").post(upload.single('image'), profileController.updateImg)

module.exports = profileApiRouter;