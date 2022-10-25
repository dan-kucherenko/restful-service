const mongoose = require('mongoose');

const EmployeesSchema = mongoose.Schema({
    employee_id: {type: Number, required: true},
    first_name: {type: String, required: true},
    last_name: {type: String, required: true},
    email: {type: String, required: true},
    age: Number,
    position: {type: String, required: true},
    salary: {type: Number, required: true},
    department: {type: String, required: true},
    country_support: {type: String, required: true},
    contract_type: {type: String, required: true},
    gender: String,
    hire_date: {type: Date, default: Date.now()}
});

module.exports = mongoose.model('Employees', EmployeesSchema);