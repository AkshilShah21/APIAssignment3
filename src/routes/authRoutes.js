const express = require('express');
const connectEnsureLogin = require('connect-ensure-login');
const authController = require('../controllers/authController');

const router = express.Router();
var path = require('path');
router.post('/login', authController.login);

router.get('/login', (req, res) =>
    res.sendFile(path.resolve(__dirname + '/../pages/login.html'))
);

router.get('/', connectEnsureLogin.ensureLoggedIn(), (req, res) =>
    res.sendFile(path.resolve( __dirname +'/../pages/index.html'))
);

router.get('/private', connectEnsureLogin.ensureLoggedIn(), (req, res) =>
    res.sendFile(path.resolve( __dirname +'/../pages/private.html'))
);

router.get('/user', connectEnsureLogin.ensureLoggedIn(), authController.getUser);

module.exports = router;
