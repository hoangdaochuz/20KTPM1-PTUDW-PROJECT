const express = require('express');
const router = express.Router();
const passport  = require('./passport/index')
const {logout,registerUser} = require('./authController')
router.get('/login',(req,res)=>{
  res.render('login')
})
router.post('/login', passport.authenticate('local',{
  successRedirect:'/',
  failureRedirect: '/auth/login'
}));

router.get('/register',(req,res)=>{
  res.render('register')
})
router.post('/register', registerUser);

router.get('/logout',logout);
module.exports = router;