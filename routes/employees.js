"use strict"
const router = require('express').Router();
const controller = require('../controllers/employees')
// const EmployeesDAO = require('../models/EmployeeDAO');
// const employeesDAO = EmployeesDAO;

// GET func for all elements
router.get('/', controller.getEmployees);

// GET func for exact employee_id
router.get('/:employee_id', controller.getEmployee);

// POST func
router.post('/', controller.addEmployee);

// DELETE func
router.delete('/:employee_id', controller.removeEmployee);

// UPDATE func
router.patch('/:id', controller.updateEmployeeInfo);

module.exports = router;