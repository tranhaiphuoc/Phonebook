const express = require('express');
const router = express.Router();
const phoneNumberRoute = require('../routes/phonebookRoute');


router.use('/', phoneNumberRoute);


module.exports = router;