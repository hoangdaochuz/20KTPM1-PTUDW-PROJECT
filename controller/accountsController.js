const {getUsers, getDetailUser} = require('../service/userService')

const viewAccounts = async(req, res) => {
    const listAccounts = await getUsers();
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