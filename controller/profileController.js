const {editProfileService} = require('../services/profileService')
const showProfile = (req, res, next)=>{
  res.render("profile")
}

const editProfile = async(req,res,next)=>{
  const {id, fullname, email} = req.body
  const result = await editProfileService(fullname,email,id)
  if(!result.message){
    req.logout(function(err) {
      if (err) { return next(err); }
      res.redirect('/auth/login')
    });
  }else{
    res.render('profile',{message:result.message})
  }
}
module.exports = {
  showProfile,
  editProfile
}