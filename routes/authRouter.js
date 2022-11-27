const express = require('express');
const router = express.Router();
const {viewSignIn, signIn} = require('../controller/authController')
router.get('/',viewSignIn);
router.post('/login',signIn);

module.exports = router;