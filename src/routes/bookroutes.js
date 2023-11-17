/*
 * Filename: bookroutes.js
 * Student's Name: Meet Patel
 * Student ID: 200555977
 * Date: 12 Oct 2023
 */

const express = require('express');
const bookController = require('../controllers/bookcontrollers');
const connectEnsureLogin = require('connect-ensure-login');

const router = express.Router();


// Middleware to ensure user is authenticated
const ensureAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login'); // Redirect to login if not authenticated
};

// Apply ensureAuthenticated middleware to all routes
router.use(ensureAuthenticated);

// get all the books detail
router.get('/', bookController.getAllBooks);

// get particular book detail 
router.get('/:id', bookController.getBookById);

// Add new book 
router.post('/', bookController.addNewBook);

// update the existing book detail
router.put('/:id', bookController.updateBook);

// delete an existing book
router.delete('/:id', bookController.deleteBook);

module.exports = router;