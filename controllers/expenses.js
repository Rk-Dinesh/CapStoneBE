const ExpenseSchema = require("../models/ExpenseModel")

exports.addExpense= async (req, res) => {
    const { title, amount, category, description, date } = req.body

    const Expense = ExpenseSchema({
        title,
        amount,
        category,
        description,
        date
    })

    try {
        //validate
        if (!title || !category || !description || !date) {
            return res.status(400).json( {message: "All fields sre required"})
        }
        if (amount <= 0 || !amount === 'number') {
            return res.status(400).json({ message: "All fields sre requiredAmount Must be positive"})
        }
        await Expense.save()
        res.status(200).json({message: "Expense Added"})
    } catch (error) {
        res.status(500).json({message: "server error"})
    }

    console.log(Expense)
}

exports.getExpense = async (req, res) => {
    try {
        const Expense = await ExpenseSchema.find().sort({ createdAt: -1 })
        res.status(200).json(Expense)
    } catch (error) {
        res.status(500).json({message: "server Error"})
    }
}

exports.deleteExpense = async (req, res) => {
    const { id } = req.params;
    
    ExpenseSchema.findByIdAndDelete(id)
        .then((income) => {
            res.status(200).json({message: "Expense Deleted"})
        })

        .catch((err) => {
            res.status(500).json({message: "Server Error"})      
        })
}
