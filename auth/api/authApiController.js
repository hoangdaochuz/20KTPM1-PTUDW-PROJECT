const authService = require("../authService")

exports.verifyEmail = async(req, res)=>{
  const {email} = req.params;
  const result = await authService.emailExits(email);
  res.json(!result);
}