const express = require('express');
const mongoose = require("mongoose");
const cors = require("cors");

require('dotenv').config();

const app = express();


app.use(cors());
app.use(express.json());

const uri=process.env.DATABASE;

mongoose.connect(uri,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    
});
const connection = mongoose.connection;
connection.once("open",() =>
console.log("connection established successfully")
);

const userRouter = require('./routes/users');
app.use('/users',userRouter)

const transactionRouter = require('./routes/transactions');
app.use('/transactions',transactionRouter)

const port =  process.env.PORT || 5000;
app.listen(port,() => console.log("the app is running on port 5000"));