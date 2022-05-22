const express = require('express')
const router = express.Router()
const { getAccounts, setAccount, updateAccount, deleteAccount } = require('../controllers/accountController')


router.route('/').get(getAccounts).post(setAccount)
router.route('/:id').put(updateAccount).delete(deleteAccount)

module.exports = router