const express = require('express')
const router = express.Router();

const authApiController = require('./authApiController')
router.get('/verify-email/:email', authApiController.verifyEmail);
module.exports = router;