const db = require('../db/index')
const bcrypt = require('bcryptjs')
exports.emailExists = async(email)=>{
  const result = await db.connection.execute('select email from user where email = ? limit 1', [email]);
  return result[0].length >0;
};

/**
 * Return the user info with specify email, otherwise null
 * @param email
 * @returns {Promise<object|null>}
 */

exports.getUserByEmail = async(email)=>{
  const result = await db.connection.execute('select * from user where email = ? limit 1',[email]);
  return result[0][0];
};

exports.changePassword = async(email, newPass)=>{
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(newPass,salt);
  await db.connection.execute('UPDATE user SET user.password=? WHERE user.email = ?',[`${hash}`,`${email}`])
}

exports.insertUser = async(fullname,email, password)=>{
  await db.connection.execute('INSERT INTO user(email, password, full_name) values (?,?,?)',[email,password,fullname])
}