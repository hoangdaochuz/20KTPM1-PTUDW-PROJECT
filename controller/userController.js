const viewUserActivity = (req, res, next)=>{
    res.render('userActivities')
}

const viewUserProfile = (req, res, next)=>{
    res.render('user');
}
const viewUserAccountSettings = (req, res, next)=>{
    res.render('userAccountSettings');
}

const viewUserProfileSettings = (req, res, next)=>{
    res.render('userProfileSettings');
}

// const editProduct = (req, res, next)=>{
//     res.redirect('/products');
// }
module.exports = {viewUserActivity, viewUserProfile, viewUserAccountSettings, viewUserProfileSettings}