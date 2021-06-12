const express = require('express')
const router = express.Router()
const Transactions = require('../model/transactionSchema')
const Users = require('../model/userSchema');



router.get('/', async (req, res) => {
  const transactions = await Transactions.find({}).sort({ date: -1 })
  res.send(transactions)
})



router.post('/transfer', async (req, res) => {
  const { from, to, amount } = req.body
  try {
    const fromCustomer = await Users.findById(from);
    const newFromBalance = Number(fromCustomer.balance) - Number(amount);
    const updatedFrom = await Users.findByIdAndUpdate({_id:from},{balance:newFromBalance},{new:true});

    // Users.updateOne({ _id: from }, { balance: newFromBalance }, err => {
    //   if (err) {
    //     console.log(err)
    //     res.status(500).send(err)
    //   } else {
    //     console.log('UPDATED')
    //   }
    // })
    const toCustomer = await Users.findById(to)
    const newToBalance = Number(toCustomer.balance) + Number(amount)
    const updatedTo = await Users.findByIdAndUpdate({_id:from},{balance:newFromBalance},{new:True});
    // Users.updateOne({ _id: to }, { balance: newToBalance }, err => {
    //   if (err) {
    //     console.log(err)
    //     res.status(500).send('Server Error')
    //   } else {
    //     console.log('UPDATED')
    //   }
    // })

    const newTransaction = new Transactions({
      from: updatedFrom,
      to: updatedTo,
      amount,
    });
await newTransaction.save();
res.status(201).json(newTransaction);
    // transactions.save()
    // res.json(transactions)
  } catch (error) {
    console.log(error)
    res.status(500).json({message:error.message});
  }
})

module.exports = router