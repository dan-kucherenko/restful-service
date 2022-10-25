"use strict"
const router = require('express').Router();
const controller = require('../controllers/employees')
const EmployeesDAO = require('../models/EmployeeDAO');
const employeesDAO = EmployeesDAO;

/* TODO: finish EmployeeDAO realisation, check all the functions. Add new data fields to the EmployeeSchema: department, role, etc.
*   Add business logic functions (av. salary in department, av age of the employees. */


// GET func for all elements
router.get('/', employeesDAO.showEmployees);

// GET func for exact employee_id
router.get('/:employee_id', controller.getEmployee);

// GET func for exact department
router.get('/departments/:department', controller.getEmployeesFromDepartment);

// GET func for salary
router.get('/departments/average_salary/:department', controller.getAverageSalary);

// GET func for exact position employees
router.get('/positions/:position', controller.getEmployeesWithPosition);

// POST func
router.post('/', controller.addEmployee);

// DELETE func
router.delete('/:employee_id', controller.removeEmployee);

// UPDATE func
router.patch('/:id', controller.updateEmployeeInfo);

module.exports = router;