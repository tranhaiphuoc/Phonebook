
exports.getAll = async (req, res, next) => {
  const username = req.query.username
  let response;
  let data;

  if (username !== undefined) {
    response = await fetch(`http://localhost:3000/api/phonebook/?username=${username}`);
    data = await response.json();
  }
  else {
    response = await fetch(`http://localhost:3000/api/phonebook`);
    data = await response.json();
  }

  res.render('home', { phonebook: data });
}

exports.postAddOne = async (req, res, next) => {
  const { username, phone, email } = req.body;
  const response = await fetch('http://localhost:3000/api/phonebook', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, phone, email })
  });
  const data = await response.json();

  res.redirect('/');
}

exports.getOne = async (req, res, next) => {
  const id = req.params.id;
  const response = await fetch(`http://localhost:3000/api/phonebook/${id}`);
  const data = await response.json();

  if (data) {
    res.render('edit', { phonebook: data, id: id });
  } else {
    res.status(404).send('Phone number not found');
  }
}

exports.postUpdateOne = async (req, res, next) => {
  const id = req.params.id;
  const { username, phone, email } = req.body;
  const response = await fetch(`http://localhost:3000/api/phonebook/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, phone, email })
  });
  const data = await response.json();

  res.redirect('/');
}

exports.postDeleteOne = async (req, res, next) => {
  const id = req.params.id;
  const response = await fetch(`http://localhost:3000/api/phonebook/${id}`, {
    method: 'DELETE'
  });
  const data = await response.json();

  res.redirect('/');
}

