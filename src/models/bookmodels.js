/*
 * Filename: bookmodels.js
 * Student's Name: Chesta Patel
 * Student ID: 200542446
 * Date: 12 Oct 2023
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  BooksName: { 
    type: String, 
    required: true 
},
  ISBN: { 
    type: String, 
    unique: true,
    required: true,  
},
  Rating: { 
    type: Number, 
    required: true 
},
  Author: { 
    type: String, 
    required: true 
},
  Genre: { 
    type: String, 
    required: true 
},
created_date:{
    type:Date,
    default: Date.now
}
}, { bufferCommands: false });

module.exports = mongoose.model('Book', BookSchema);