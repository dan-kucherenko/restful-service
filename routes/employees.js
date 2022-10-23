"use strict"
const express = require('express');
const router = express.Router();
const controller = require('../controllers/employees');


// GET func for all elements
router.get('/', controller.getEmployees);

// GET func for exact employee_id
router.get('/:id', controller.getEmployee);

// POST func
router.post('/', controller.addEmployee);

// DELETE func
router.delete('/:id', controller.removeEmployee);

// UPDATE func
router.patch('/:id', controller.updateEmployeeInfo);

module.exports = router;