// const Ajv = require('ajv')
// const addFormats = require('ajv-formats')

// const authService = require('./authService');
// const registerSchema = require('./schema/register');

// const ajv = new Ajv();
// addFormats(ajv)
// const registerUser = async(req, res, next)=>{
//     if(!ajv.validate(registerSchema, req.body)){
//         res.render('register',{error: 'Invalid input'});
//         return;
//     }
//     const {fullname, email, password} = req.body
//     try{
//         await authService.register(fullname, email, password)
//     }catch(e){
//         res.render('register',{error:e.message});
//         return;
//     }

//     res.redirect('/auth/signin')
// };

// const logout = (req, res) => {
//     req.logout(function (err) {
//       if (err) {
//         return next(err);
//       }
//       res.redirect('/');
//     });
//   };

// module.exports = {registerUser, logout};
// // module.exports = {logout}

const Ajv = require('ajv')
const addFormats = require('ajv-formats')

const authService = require('./authService');
const registerSchema = require('./schema/register');

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

    res.redirect('/auth/signin')
};

const logout = (req, res) => {
    req.logout(function (err) {
      if (err) {
        return next(err);
      }
      res.redirect('/dashboard');
    });
  };

module.exports = {registerUser, logout};