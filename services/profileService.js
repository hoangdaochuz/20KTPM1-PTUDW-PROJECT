const db=require('../db/index')
const authRepository = require('../auth/authRepository')

const emailIsDuplicatedForUpdate = async(newEmail, id)=>{
  const result = await db.connection.execute('SELECT * FROM user WHERE user.id <> ? and user.email = ? ',[id, `${newEmail}`])
  return result[0]
}

const editProfileService = async(newFullName, newEmail, id)=>{
  const dupliate = await emailIsDuplicatedForUpdate(newEmail, id);
  let result = null;
  if(dupliate.length > 0){
    result = {message:"Email Exist"}
  }else{
    result = await db.connection.execute('UPDATE user SET user.full_name = ?, user.email = ? WHERE user.id = ?',[`${newFullName}`,`${newEmail}`, id])
  }
  return result
}

const updateImageService = async(id,image)=>{
  console.log(image)
  console.log(id)
  const result = await db.connection.execute('UPDATE user SET user.avatar = ? WHERE user.id = ?',[`${image}`,id])
  return result
}

module.exports = {
  editProfileService,
  updateImageService
  
}