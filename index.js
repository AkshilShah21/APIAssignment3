import express from 'express';
import bodyParser from 'body-parser';
import bookroutes from './src/routes/bookroutes';
import authroutes from './src/routes/authRoutes';


// mongoose
const mongoose = require('mongoose');
const expressSession = require('express-session')({
  secret: 'secret',
  resave: false,
  saveUninitialized: false
});

//passport
const passport = require('passport');
const connectEnsureLogin = require('connect-ensure-login');


//app instance
const app = express();
const PORT = 3000;

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Specify the views directory (assuming your views are in a 'views' folder)
var path = require('path');
app.set('views', path.join(__dirname, 'src', 'pages'));


//mongoDB 
const InitiateMongoServer = require("./src/config/db");
InitiateMongoServer();

const { seedDatabase } = require('./src/seeder');

app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(expressSession);
app.use(passport.initialize());
app.use(passport.session());

app.listen(PORT, () => 
console.log(` server is running on the port ${PORT}`)
);

// Connect to the database and seed the data
mongoose.connection.once('open', () => {
  seedDatabase();
});

// Passport Configuration
// require('./src/models/User').register({username:'chesta', active: false}, 'chesta'); 
require('./src/models/User')
require('./src/config/passport')(passport);

// Routes
app.use('/books', bookroutes);
app.use('/', authroutes);

