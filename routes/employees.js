"use strict"
const express = require('express');
const router = express.Router();
const Employee = require('../models/Employees');

// GET func for all elements
router.get('/', async (req, res) => {
    try {
        const allEmployees = await Employee.find();
        res.json(allEmployees);
    } catch (err) {
        res.json({message: err});
    }
});

// GET func for exact employee
router.get('/:employee_id', async (req, res) => {
    try {
        const employee = await Employee.findById(req.params.employee_id);
        res.json(employee);
    } catch (err) {
        res.json({message: err});
    }
});

// POST method
router.post('/', (req, res) => {
    try {
        const newEmployee = new Employee({
            employee_id: req.body.employee_id,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            age: req.body.age,
            dob: req.body.dob,
            gender: req.body.gender,
            hire_date: req.body.hire_date
        });
        const savedEmployee = newEmployee.save();
        res.json(savedEmployee);
    } catch (err) {
        res.json({message: err});
    }
});

module.exports = router;