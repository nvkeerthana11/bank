const mongoose = require('mongoose')

const transactionSchema = new mongoose.Schema({
  from: {
    type: Object,
    required: true,
  },
  to: {
    type: Object,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
})


const Transactions = mongoose.model('TRANSACTION', transactionSchema);
module.exports = Transactions;