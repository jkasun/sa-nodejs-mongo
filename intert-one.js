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

    // This objects holds the refrence to the db
    const db = client.db(dbName);

    // Get the documents collection

    const collection = db.collection('users');

    // Insert some documents
    collection.insertOne({
        firstName: 'john',
        lastName: 'doe',
        age: 21,
        hobbies: [
            'Reading books',
            'Collecting stamps'
        ]
    }, (err, result) => {
        if (err) {
            throw err;
        }

        console.log(result.ops);
    });

    client.close();
});