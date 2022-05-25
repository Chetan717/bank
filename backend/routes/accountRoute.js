const express = require('express')
const router = express.Router()
const { getAccounts, setAccount, updateAccount, deleteAccount,balanceAccount, } = require('../controllers/accountController')
const { protect } = require('../middleware/authMiddleware')
const deposit = require("../controllers/depositController");
const withdraw = require("../controllers/withdrawController");
const displayBalance = require("../controllers/displayBalance");


router.route('/').get(protect, getAccounts).post(protect, setAccount)
router.route('/:id').delete(protect, deleteAccount).put(protect, updateAccount)
// router.route('/balance/:id').post(protect, balanceAccount)
router.post("/deposit", deposit);
router.post("/withdraw", withdraw);
router.post("/balance", displayBalance);

module.exports = router