const mongooose = require('mongoose');
// -----------connection to mongodb-------------------//
mongooose.connect('mongodb://127.0.0.1/HospitalAPI');

// ---------------establish connection---------------//
const db = mongooose.connection;

db.on('error', console.error.bind(console, "Error connecting to DB"));
// ----------if db is connected --------------//
db.once('open', function () {
    console.log('Connected to Database :: MongoDB');
});

module.exports = db;
