
const {editProfileService, updateImageService} = require('../services/profileService')
const showProfile = (req, res, next)=>{
  res.render("profile")
}

const showChangePassword = (req, res, nex)=>{
  res.render('changePassword')
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

const updateImg = async(req,res,next)=>{
  const id = req.body.id
  const image = req.file.path
  const result = await updateImageService(id,image);
  if(result){
    res.status(200).json({status: "success"})
    // res.redirect('/auth/login')
  }else{
    res.status(400).json({status: "error"})
  }
}

module.exports = {
  showProfile,
  editProfile,
  updateImg,
  showChangePassword,
}