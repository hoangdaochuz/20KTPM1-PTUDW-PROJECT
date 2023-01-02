const db  = require('../db/index')

const getInfoUser = async() => {
    const user = await db.connection.execute('SELECT user.full_name, user.email FROM user where id=4')
    return user[0][0]
}


const updateInfoUser = async(id, fullName, image) => {
    result = null
    console.log("image1: " + image)
    if(id && !image) {
        console.log("image!!!1");
        result = await db.connection.execute('UPDATE user SET user.full_name = ? WHERE user.id = ?', [`${fullName}`, `${id}`])
    }
    else if(id && image) {
        console.log("image2: " + image)
        result = await db.connection.execute('UPDATE user SET user.avatar = ?, user.full_name = ? WHERE user.id = ?', [`${image}`, `${fullName}`, `${id}`])
    }
        return result;
}

const getUsers = async(filter, sort) => {
    let result = null

    if(sort) {
        if(sort === "name-asc") {
            result = await db.connection.execute(`SELECT * FROM user ORDER BY full_name ASC`)
        } else if(sort === "name-desc") { 
            result = await db.connection.execute(`SELECT * FROM user ORDER BY full_name DESC`)
        } else if(sort === "email-asc") {
            result = await db.connection.execute(`SELECT * FROM user ORDER BY email ASC`)
        } else {
            result = await db.connection.execute(`SELECT * FROM user ORDER BY email DESC`)
        }
    } 
    else if(filter) {
        result = await db.connection.execute(`SELECT * FROM user WHERE email like ? or full_name like ?`, [`%${filter}%`, `%${filter}%`])
    } else {
        result = await db.connection.execute(`SELECT id, email, full_name, status FROM user`);
    }
    return result[0]
}

const getDetailUser = async(id) => {
    const result = await db.connection.execute('SELECT * FROM user WHERE id = ?', [id]);
    return result[0]
}

const updateStatus = async(idAccount, status) => { 
    if(status === "true") {
        status = 1
    }
    const result = await db.connection.execute('UPDATE user SET status =? WHERE id =?', [status, idAccount]);
    return result;
}

module.exports = {getInfoUser, updateInfoUser, getUsers, getDetailUser, updateStatus}