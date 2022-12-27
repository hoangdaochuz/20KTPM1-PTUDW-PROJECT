const Ajv = require('ajv')
const addFormats = require('ajv-formats')
const bcrypt = require('bcryptjs')
const authService = require('./authService');
const registerSchema = require('./schema/register');
const authRespository = require('./authRepository')

const ajv = new Ajv();
addFormats(ajv)
const registerUser = async(req, res, next)=>{
    if(!ajv.validate(registerSchema, req.body)){
        res.render('register',{error: 'Invalid input'});
        return;
    }
    const {fullname,email,password} = req.body
    try{
        await authService.register(fullname,email,password)
    }catch(e){
        res.render('register',{error:e.message});
        return;
    }

    res.redirect('/')
};

const logout = (req, res) => {
    req.logout(function (err) {
      if (err) {
        return next(err);
      }
      res.redirect('/');
    });
  };

const changePassword = async(req,res)=>{
  const {oldPass, newPass, email} = req.body
  console.log(oldPass, newPass, email)
  const user = await authRespository.getUserByEmail(email);
  if(user){
    if (await bcrypt.compare(oldPass, user.password)){
      await authRespository.changePassword(email, newPass)
      res.redirect('/auth/login')
    }else{
      console.log('error')
      res.render('changePassword',{error: "Current password is incorrect"})
    }
  }
} 

module.exports = {registerUser, logout, changePassword};