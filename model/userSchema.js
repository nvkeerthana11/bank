const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    accno:{
        type:Number,
        required:true
    },
    balance:{
        type:Number,
        required:true
    }
    
}) 

const Users = mongoose.model('USER',userSchema);
module.exports = Users;