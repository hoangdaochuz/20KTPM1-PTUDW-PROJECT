// const db = require('../db/index')

// exports.emailExists = async(email)=>{
//   const result = await db.connection.execute('select email from user where email = ? limit 1', [email]);
//   return result[0].length >0;
// };

// /**
//  * Return the user info with specify email, otherwise null
//  * @param email
//  * @returns {Promise<object|null>}
//  */

// exports.getUserByEmail = async(email)=>{
//   const result = await db.connection.execute('select * from user where email = ? limit 1',[email]);
//   console.log(result[0][0])
//   return result[0][0];
// };

// exports.insertUser = async(fullname,email, password)=>{
//   await db.connection.execute('INSERT INTO user(email, password, full_name) values (?,?,?)',[email,password,fullname])
// }

const db = require('../db/index')

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
  console.log(result[0][0])
  return result[0][0];
};

exports.insertUser = async(fullname,email, password)=>{
  await db.connection.execute('INSERT INTO user(email, password, full_name, admin, status) values (?,?,?,?,?)',[email,password,fullname, true, true])
}