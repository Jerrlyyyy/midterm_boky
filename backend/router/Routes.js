const express = require('express');
const router = express.Router();
const controller = require('../controller/controller');

// Handle POST request to /getdata
router.post('/getdata', controller.Adddata); 

module.exports = router; 
