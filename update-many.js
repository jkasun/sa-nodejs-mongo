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

    collection.updateMany(
        // The query filter
        { 
            firstName: 'john'
        }, 
        // the update values
        {
            $set: {
                lastName: 'well', 
                edited: true
            }
        }, 
        // callback
        (err, result) => {
            if (err) {
                throw err;
            }


            console.log(result.result);
        }
    );

    client.close();
});