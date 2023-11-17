const User = require('../models/User');
const mongoose = require('mongoose');

module.exports = (passport) => {
   

    passport.use(User.createStrategy())

    passport.serializeUser(User.serializeUser());
    
    passport.deserializeUser(User.deserializeUser());
};
