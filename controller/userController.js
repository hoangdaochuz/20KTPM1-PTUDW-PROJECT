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
    var fileName = ""
    
    if(req.files) {
        var file = req.files.avatarImage;
        fileName = file.name
        // Di chuyen anh ve thu muc trong project
        file.mv('public/locasset/images/user/' + file.name, async(err)=> {
            if (err) {
                return res.redirect('/auth/signin')
            }
        })
    }

    const updateInfo = await updateInfoUser(id, fullName, '/locasset/images/user/' + fileName)
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



