const mongoose = require('mongoose');

const EmployeesSchema = mongoose.Schema({
    id:{
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
    hire_date: Date
});

module.exports = mongoose.models('Employees', EmployeesSchema);