const {getUsers, getDetailUser} = require('../service/userService')
const qs = require('qs')

const viewAccounts = async(req, res) => {
    const filter = req.query.filter
    const sort = req.query.sort

    const listAccounts = await getUsers(filter, sort);
    res.render('accounts',{listAccounts})
}

const viewDetailAccount = async(req, res) => {
    const id = req.params.id
    const detailAccount = await getDetailUser(id);
    res.render('detailAccount',{detailAccount})
}

module.exports = {
    viewAccounts,
    viewDetailAccount
}