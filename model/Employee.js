const mongoose= require('mongoose')

const employeeSchema = new mongoose.Schema({
    name: {
        type: String
    },
    designation: {
        type: String,
        //default:"employee"
    },
    email: {
        type: String
    },
    phone: {
        type: Number
    },
    age: {
        type: Number
    },

})

const employee = mongoose.model('employee', employeeSchema)
module.exports = employee