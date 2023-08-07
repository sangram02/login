const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
    username : {
        type:String,
        required:true
    },
    email : {
        type:String,
        unique:true
    },
    password : {
        type:String,
        required:true,
        unique:true
    }
})

const Register = new mongoose.model("Register",employeeSchema);

module.exports = Register;