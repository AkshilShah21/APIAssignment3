const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const Schema = mongoose.Schema;
const UserCredential = new Schema({
    username: String,
    password: String
});

UserCredential.plugin(passportLocalMongoose);

module.exports = mongoose.model('Users', UserCredential, 'Users');