"use strict"
const router = require('express').Router();
const controller = require('../controllers/employees')
const EmployeesDAO = require('../models/EmployeeDAO');
const employeesDAO = EmployeesDAO;

/* TODO: finish EmployeeDAO realisation, check all the functions.
    Add business logic functions (av. salary in department, av age of the employees. */


// GET func for all elements
router.get('/', controller.getEmployees);

// GET func for exact employee_id
router.get('/:employee_id', controller.getEmployee);

// GET func for exact last_name of the employee
router.get('/:last_name', controller.getEmployee);

// GET func for exact department
router.get('/departments/:department', controller.getEmployeesFromDepartment);

// GET func for receiving average salary in particular department
router.get('/departments/average_salary/:department', controller.getAverageSalary);

// GET func for exact position of the employees
router.get('/positions/:position', controller.getEmployeesWithPosition);

// POST func
router.post('/', controller.addEmployee);

// DELETE func
router.delete('/:employee_id', controller.removeEmployee);

//UPDATE func for employee's promotion (changing his position)
router.patch('/:employee_id/promotion', controller.promoteEmployee);

// UPDATE func for employee's name
router.patch('/:employee_id', controller.updateEmployeeInfo);

module.exports = router;