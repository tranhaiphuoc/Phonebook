const Phonebook = require('../../models/phonebook');
const phonebookService = require('../../services/phonebookService');


exports.getAll = async (req, res, next) => {
  const username = req.query.username;

  res.json(await phonebookService.getAll(username));
}

exports.postAddOne = async (req, res, next) => {
  const { username, phone, email } = req.body;

  await phonebookService.addOne(new Phonebook(username, phone, email));
  res.json({ message: 'Phonebook created successfully' });
}

exports.getOne = async (req, res, next) => {
  const id = req.params.id;
  const phonebook = await phonebookService.getOne(id);

  if (phonebook) {
    res.json(phonebook);
  } else {
    res.status(404).send('Phone number not found');
  }
}

exports.putUpdateOne = async (req, res, next) => {
  const id = req.params.id;
  const { username, phone, email } = req.body;

  const result = await phonebookService.updateOne({ username, phone, email }, id);

  if (result) {
    res.json({ message: 'Phonebook updated successfully' });
  }
}

exports.postDeleteOne = async (req, res, next) => {
  const id = req.params.id;

  const result = await phonebookService.deleteOne(id)

  if (result) {
    res.json({ message: 'Phonebook deleted successfully' });
  }
}
