const { ObjectId }  = require('mongodb')
const { dbName, client, colls } = require('./dbService');


exports.getAll = async (username) => {
  const query = {
    username: { '$regex' : username, '$options' : 'i' }
  };
  // const query = {
  //   username: { $eq: username }
  // };

  if (username !== undefined) {
    return await client.db(dbName).collection(colls.phonebook).find(query).toArray();
  }
  
  return await client.db(dbName).collection(colls.phonebook).find().toArray();
};

exports.addOne = async (phoneNumber) => {
  try {
    const res = await client.db(dbName).collection(colls.phonebook).insertOne(phoneNumber);

    return res.insertedId;
  } catch {
    return 0;
  }
};

exports.getOne = async (id) => {
  const query = {
    _id: { $eq: new ObjectId(id) }
  };

  return await client.db(dbName).collection(colls.phonebook).findOne(query);
}

exports.updateOne = async ({ username, phone, email }, id) => {
  try {
    const query = {
      _id: { $eq: new ObjectId(id) }
    };
    const updates = {
      $set: { username: username, phone: phone, email: email}
    };
    const res = await client.db(dbName).collection(colls.phonebook).updateOne(query, updates);

    return res.modifiedCount;
  } catch {
    return 0;
  }
}

exports.deleteOne = async (id) => {
  try {
    const query = {
      _id: { $eq: new ObjectId(id) }
    };
    const res = await client.db(dbName).collection(colls.phonebook).deleteOne(query);
  
    return res.deletedCount;
  } catch {
    return 0;
  }
}
