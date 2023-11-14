const express = require('express');
const router = express.Router();
const phoneNumberApiRoute = require('./phonebook/phonebook.api.route');


router.use('/phonebook', phoneNumberApiRoute)


module.exports = router;
