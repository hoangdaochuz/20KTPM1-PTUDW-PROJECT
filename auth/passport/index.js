const passport = require('passport');
const LocalStrategy = require('passport-local')
const authService = require('../authService')
passport.use(new LocalStrategy({usernameField: 'email'}, async function verify(username, password, cb){
    const user = await authService.checkUserCredential(username,password);
    console.log(user)
    if(user){
      return cb(null, user);
    } 
    return cb(null,false)
}))

passport.serializeUser(function(user, cb){
  process.nextTick(()=>{
    cb(null,{id: user.id, fullname: user.full_name, email: user.email, avatar: user.avatar})
  })
})
passport.deserializeUser((user,cb)=>{
  process.nextTick(()=>{
    return cb(null,user)
  })
})

module.exports = passport;