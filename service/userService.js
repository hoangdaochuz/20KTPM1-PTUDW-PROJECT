const db  = require('../db/index')
const qs = require('qs')

const getInfoUser = async() => {
    const user = await db.connection.execute('SELECT user.full_name, user.email FROM user where id=4')
    return user[0][0]
}

const updateInfoUser = async(id, fullName, avatarImage) => {
    result = null
    console.log("FullName: " + fullName)

    if(id !== undefined && avatarImage === "/locasset/images/user/") {
        result = await db.connection.execute('UPDATE user SET user.full_name = ? WHERE user.id = ?', [`${fullName}`, `${id}`])
    }
    else if(id && avatarImage !== "/locasset/images/user/") {
        result = await db.connection.execute('UPDATE user SET user.avatar = ?, user.full_name = ? WHERE user.id = ?', [`${avatarImage}`, `${fullName}`, `${id}`])
    }
        return result;
}

const getUsers = async(filter, sort) => {
    let result = null
    console.log("Filter: " + filter + " " + sort)

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
        result = await db.connection.execute(`SELECT id, email, full_name FROM user`);
    }
    return result[0]
}

const getDetailUser = async(id) => {
    console.log("ID: " + id)
    const result = await db.connection.execute('SELECT * FROM user WHERE id = ?', [id]);
    return result[0]
}

module.exports = {getInfoUser, updateInfoUser, getUsers, getDetailUser}