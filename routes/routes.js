
const { addIncome, getIncomes, deleteIncome } = require('../controllers/income');
const {addExpense, getExpense,deleteExpense} = require('../controllers/expenses');

const router = require('express').Router();


router.post('api/v1/add-income', addIncome)
router .get('api/v1/get-incomes', getIncomes)
router.delete('api/v1/delete-income/:id',deleteIncome)
router.post('api/v1/add-expense', addExpense)
router .get('api/v1/get-expenses', getExpense)
router.delete('api/v1/delete-expense/:id',deleteExpense)

module.exports = router