const db  = require('../db/index')

const getInfoUser = async() => {
    const user = await db.connection.execute('SELECT user.full_name, user.email FROM user where id=4')
    return user[0][0]
}

const updateInfoUser = async(id, fullName, avatarImage) => {
    result = null
    if(id !== undefined && fullName !== undefined)
        result = await db.connection.execute('UPDATE user SET user.full_name = ? WHERE user.id = ?', [`${fullName}`, `${id}`])

    return result;
}

module.exports = {getInfoUser, updateInfoUser}