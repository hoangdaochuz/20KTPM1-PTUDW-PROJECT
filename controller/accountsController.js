const {getUsers, getDetailUser, updateStatus} = require('../service/userService')

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

const updateStatusAccount = async(req, res) => { 
    const {idAccount, status} = req.body
    console.log("ID: " + idAccount + " Status: " + status)
    const result = await updateStatus(idAccount, status)
    if(result){
        res.status(200).json({status: "success"})
    }else{
        res.status(400).json({status: "error"})
    }
}

module.exports = {
    viewAccounts,
    viewDetailAccount,
    updateStatusAccount
}