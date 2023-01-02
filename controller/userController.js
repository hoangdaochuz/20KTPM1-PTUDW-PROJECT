const {updateInfoUser} = require('../service/userService')

const viewUserActivity = (req, res, next)=>{
    res.render('userActivities')
}

const viewUserProfile = async(req, res, next)=>{
    res.render('user');
}
const viewUserAccountSettings = (req, res, next)=>{
    res.render('userAccountSettings');
}

const viewUserProfileSettings = async(req, res, next)=>{
    res.render('userProfileSettings')
}

const updateProfile = async (req, res) => { 
    const idUser = req.params.id
    const {fullName} = req.body
    var {image} = req.body
 
    if(req.file) {
        image = req.file.path
    } 

    const result = await updateInfoUser(idUser, fullName, image)
    if(result){
        req.logout(function() {
            res.redirect('/auth/signin')
        })
    }else{
        res.status(400).json({status: "error"})
    }
}

module.exports = {viewUserActivity, viewUserProfile, viewUserAccountSettings, viewUserProfileSettings, updateProfile}



