/*
 * Filename: passport.js
 * Student's Name: Chesta Patel
 * Student ID: 200542446
 * Date: 16 Oct 2023
 */

const User = require('../models/User');
const mongoose = require('mongoose');

module.exports = (passport) => {
   

    passport.use(User.createStrategy())

    passport.serializeUser(User.serializeUser());
    
    passport.deserializeUser(User.deserializeUser());
};
