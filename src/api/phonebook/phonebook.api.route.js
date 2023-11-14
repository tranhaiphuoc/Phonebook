const express = require('express');
const router = express.Router();
const phonebookApi = require('./phonebook.api');


router.get('/', phonebookApi.getAll);
router.post('/', phonebookApi.postAddOne);
router.get('/:id', phonebookApi.getOne);
router.put('/:id', phonebookApi.putUpdateOne);
router.delete('/:id', phonebookApi.postDeleteOne);


module.exports = router;