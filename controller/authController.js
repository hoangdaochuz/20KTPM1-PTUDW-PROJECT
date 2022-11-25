const loginUser = (req, res, next)=>{
    const {email, password} = req.body;
    console.log(email, password);
}

const registerUser = (req, res, next)=>{
    const { name, phone, email, password, confirmPassword} = req.body;
    console.log(name, phone, email, password, confirmPassword);
}

module.exports = {loginUser, registerUser};