const mongoose = require('mongoose');

const EmployeesSchema = mongoose.Schema({
    employee_id: {
        type: Number,
        required: true
    },
    first_name: String,
    last_name: String,
    email: String,
    age: Number,
    country_support: String,
    contract_type: String,
    gender: String,
    hire_date: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Employees', EmployeesSchema);