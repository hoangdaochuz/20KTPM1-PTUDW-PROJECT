const {getInfoUser, updateInfoUser} = require('../service/userService')

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
    const {id} = req.body
    const {fullName} = req.body
    const {avatarImage} = req.body

    const updateInfo = await updateInfoUser(id, fullName, avatarImage)
    if(updateInfo) {
        req.logout(function() {
            res.redirect('/auth/signin')
        })
    } else {
        res.render('userProfileSettings', {updateInfo});
    }
}

// const editProduct = (req, res, next)=>{
//     res.redirect('/products');
// }
module.exports = {viewUserActivity, viewUserProfile, viewUserAccountSettings, viewUserProfileSettings}