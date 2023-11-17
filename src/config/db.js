/*
 * Filename: db.js
 * Student's Name: Akshil Shah
 * Student ID: 200557118
 * Date: 16 Oct 2023
 */

const mongoose = require('mongoose');
const MONGOURI = "mongodb+srv://user:user@atlascluster.ho6zqeq.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp"

const InitateMongoServer = async() => {
    try {
        await mongoose.connect(MONGOURI, {
          useNewUrlParser: true,
          useUnifiedTopology: true
        });
        console.log('Successfully connected to DB');
    
      } catch (error) {
        console.error('Error connecting to DB ', error);
      }
}

module.exports = InitateMongoServer;