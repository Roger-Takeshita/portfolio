const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');                                   //! 3 - Require session package below cookie-parser
const passport = require('passport');                                         //! 4 - Require passport package -  AFTER session (alwyas)
const logger = require('morgan');
const methodOverrider = require('method-override');                           //! 1 - Require method-override to make CRUD opereations (below logger)

const indexRouter = require('./routes/index');

require('dotenv').config();                                                   //! 5 - Require Dotenv
require('./config/database');                                                 //! 6 - Require MongoDB Database
require('./config/passport');                                                 //! 7 - Require our passport file after database

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({                                                             //! 8 - Session middleware, mount AFTER cookieParser();
   secret: process.env.SESSION_SECRET,
   resave: false,
   saveUninitialized: true,
}));
app.use(passport.initialize());                                               //! 9 - Passport middleware, mount AFTER session (always)
app.use(passport.session());                                                  //! 10- Passport middleware, mount AFTER session (always)
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverrider('_method'));                                         //! 2 - Add method-override middleware so que can make a Query String.

app.use('/', indexRouter);

app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
