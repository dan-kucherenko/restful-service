"use strict"
const express = require('express');
const router = express.Router();
const Employees = require('../models/Employees');

// GET method for all elements
router.get('/', (req, res) => {
    Employees.find().then(data => {
        res.json(data);
    })
        .catch(err => {
            res.json({message: err})
        });
});

// POST method
router.post('/', (req, res) => {
    const post = new Employees({
        employee_id: req.body.employee_id,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        age: req.body.age,
        dob: req.body.dob,
        gender: req.body.gender,
        hire_date: req.body.hire_date
    });
    post.save()
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json({message: err});
        });
});

module.exports = router;