/*
 * Filename: seeder.js
 * Student's Name: Meet Patel
 * Student ID: 200555977
 * Date: 12 Oct 2023
 */

const mongoose = require('mongoose');
const Book = require('./models/bookmodels');

const seedData = [
  {
    BooksName: "The Da Vinci Code",
    ISBN: "978-0307474278",
    Rating: 3.8,
    Author: "Dan Brown",
    Genre: "Mystery"
  },
  {
    BooksName: "The Lord of the Rings",
    ISBN: "978-0544003415",
    Rating: 4.5,
    Author: "J.R.R. Tolkien",
    Genre: "Fantasy"
  },
  {
    BooksName: "The Alchemist",
    ISBN: "978-0061120084",
    Rating: 4.2,
    Author: "Paulo Coelho",
    Genre: "Fiction"
  },
];

async function seedDatabase() {
  // Checking if data already exists
  const existingBooks = await Book.find();
  if (existingBooks.length === 0) {
    // Seed data only db is empty
    await Book.create(seedData);
    console.log('Data seeded successfully');
  } else {
    console.log('Data already exists. Skipping seeding.');
  }
}

module.exports = {
  seedDatabase: seedDatabase
};