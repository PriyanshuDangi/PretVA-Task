const mongoose = require('mongoose');
const {MONGODB_URL} = require('../config/config');

let url = process.env.MONGODB_URL || MONGODB_URL;
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
});

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function () {
    console.log('connected to database');
});
