const express = require('express');
const router = express.Router();
const passport  = require('./passport/index')
const {logout,registerUser} = require('./authController')
router.get('/signin',(req,res)=>{
  res.render('signin')
})
router.post('/signin', passport.authenticate('local',{
  successRedirect:'/dashboard',
  failureRedirect: '/auth/signin'
}));

router.get('/register',(req,res)=>{
  res.render('register')
})
router.post('/register', registerUser);

router.get('/logout',logout);
module.exports = router;