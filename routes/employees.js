"use strict"
const express = require('express');
const router = express.Router();
const Employees = require('../models/Employees');

// GET method
router.get('/', (req, res) => {
    res.send('We are on employees page');
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