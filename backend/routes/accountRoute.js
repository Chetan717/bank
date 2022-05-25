const express = require('express')
const router = express.Router()
const { getAccounts, setAccount, updateAccount, deleteAccount,balanceAccount, } = require('../controllers/accountController')
const { protect } = require('../middleware/authMiddleware')


router.route('/').get(protect, getAccounts).post(protect, setAccount)
router.route('/:id').delete(protect, deleteAccount).put(protect, updateAccount)
// router.route('/balance/:id').post(protect, balanceAccount)

module.exports = router