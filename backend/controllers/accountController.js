
const asyncHandler = require('express-async-handler')
const Account = require('../models/accountModel')


// Get accounts

const getAccounts = asyncHandler (async(req, res) => {
    const accounts = await Account.find()
    
    res.status(200).json(accounts)
})
// Set account


const setAccount = asyncHandler (async(req, res) => {
if (!req.body.name) {
    res.status(400) 
    throw new Error ('add a name')
}

    const account = await Account.create({
        name: req.body.name,
        amount: req.body.amount
        

    })
    res.status(200).json(account)
})


// Update account


const updateAccount = asyncHandler (async(req, res) => {
    const account = await Account.findById(req.params.id)
    
    if(!account) {
        res.status(400)
        throw new Error('Account not found')
    }

    const updatedAccount = await Account.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })
    res.status(200).json(updatedAccount)
})
//Delete account


const deleteAccount = asyncHandler (async(req, res) => {

     const account = await Account.findById(req.params.id)
    
    if(!account) {
        res.status(400)
        throw new Error('Account not found')
    }

    await account.remove()

    
    res.status(200).json({ id: req.params.id})
})




module.exports = {
    getAccounts,
    setAccount,
    updateAccount,
    deleteAccount,
}