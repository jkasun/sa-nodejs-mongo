const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'userdb';

// Use connect method to connect to the server
MongoClient.connect(url, function (err, client) {
    if (err) {
        throw err;
    }

    console.log('Database connection successful');

    // This objects holds the reference to the db
    const db = client.db(dbName);

    // Get the documents collection
    const collection = db.collection('users');

    // Find by query
    collection.find({
        firstName: 'john'
    }).toArray((err, docs) => {
        if (err) {
            throw err;
        }

        console.log(docs)
    });

    client.close();
});