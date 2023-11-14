const { MongoClient } = require("mongodb");

const dbName = "phonebookDb";
const client = new MongoClient('mongodb://127.0.0.1:27017/');
const colls = {
  phonebook: 'phonebook'
}


async function connectAndCreateDatabase() {
  try {
    await client.connect();

    console.log("Connected to the database!");
  }
  catch (err) {
    client.close();
  
    console.error("Error connecting to the database:", err);
  }
}


module.exports = { dbName, client, colls, connectAndCreateDatabase };
