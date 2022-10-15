const express = require('express');
const mongoose = require('mongoose');
const service = express();

const PORT = 4567;
service.listen(PORT);
console.log('Server is running on port ' + PORT);
mongoose.connect('mongodb://localhost:27017/company',
    {useNewUrlParser: true},
    () => console.log("Connected to the DB")
);
