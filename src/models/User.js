/*
 * Filename: User.js
 * Student's Name: Chesta Patel
 * Student ID: 200542446
 * Date: 12 Oct 2023
 */

const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const Schema = mongoose.Schema;
const UserCredential = new Schema({
    username: String,
    password: String
});

UserCredential.plugin(passportLocalMongoose);

module.exports = mongoose.model('Users', UserCredential, 'Users');