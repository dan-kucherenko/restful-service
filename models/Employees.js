const mongoose = require('mongoose');

const EmployeesSchema = mongoose.Schema({
    employee_id:{
        type: String,
        required: true
    },
    first_name: String,
    last_name: String,
    age: Number,
    dob: Date,
    gender:{
        enum:['F','M']
    },
    hire_date:{
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Employees', EmployeesSchema);