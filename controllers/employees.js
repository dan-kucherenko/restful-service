const Employee = require("../models/Employees");

const getEmployees = async (req, res) => {
    try {
        const allEmployees = await Employee.find();
        res.json(allEmployees);
    } catch (err) {
        res.json({message: err});
    }
}

const getEmployee = async (req, res) => {
    try {
        const employee = await Employee.findById({_id: req.params.id});
        res.json(employee);
    } catch (err) {
        res.json({message: err});
    }
}

const addEmployee = async (req, res) => {
    const newEmployee = new Employee({
        employee_id: req.body.employee_id,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        age: req.body.age,
        dob: req.body.dob,
        gender: req.body.gender,
        hire_date: req.body.hire_date
    });
    try {
        const savedEmployee = await newEmployee.save();
        res.json(savedEmployee);
    } catch (err) {
        res.json({message: err});
    }
}

const removeEmployee = async (req, res) => {
    try {
        const firedEmployee = await Employee.remove({_id: req.params.id});
        res.json(firedEmployee);
    } catch (err) {
        res.json({message: err});
    }
}

const updateEmployeeInfo = async (req, res) => {
    try {
        const updatedEmployeeInfo = await Employee.updateOne({_id: req.params.id},
            {$set: {first_name: req.body.first_name}});
        res.json(updatedEmployeeInfo);
    } catch (err) {
        res.json({message: err});
    }
}

module.exports = {getEmployees, getEmployee, addEmployee, removeEmployee, updateEmployeeInfo};
