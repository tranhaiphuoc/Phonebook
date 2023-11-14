const express = require('express');
const router = express.Router();
const phoneNumberController = require('../controllers/phonebookController');


router.get('/', phoneNumberController.getAll);
router.post('/', phoneNumberController.postAddOne);
router.get('/edit/:id', phoneNumberController.getOne);
router.post('/edit/:id', phoneNumberController.postUpdateOne);
router.post('/delete/:id', phoneNumberController.postDeleteOne);


module.exports = router;
