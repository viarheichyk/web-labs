require('./passport-config');

var express = require('express');
var cookieSession = require('cookie-session')
var session = require('express-session');
var fileStore = require('session-file-store')(session);
var passport = require('passport');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var articleRouter = require('./routes/article');
var addRouter = require('./routes/add');
var loginRouter = require('./routes/login');
var logoutRouter = require('./routes/logout');
var registrationRouter = require('./routes/registration');
var mongoose = require("mongoose");
var User = require('./models/User');


var app = express();

mongoose.connect('mongodb://localhost:27017/blog', { useNewUrlParser: true });
var db = mongoose.connection;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'pug');

app.use(cookieSession({
    store: new fileStore,
    secret: 'ExpressBlog',
    resave: true,
    saveUninitialized: true,
    cookie: {
        path: '/',
        httpOnly: true,
        maxAge: 60 * 60,
        secure: false
    },
}));

app.use(passport.initialize());
app.use(passport.session());

var initializeUser = function() {
    User.findOne({ username: 'admin' }, function(err, doc){
        console.log(doc);
        if (!doc) {
            User.create({ username: 'admin', password: 'admin' }, function(err, doc) {
                if (err) {
                    return console.log(err);
                }
            });
        }
    });
}

//initializeUser();

var auth = function(req, res, next) {
    if (req.isAuthenticated()) {
        next();
    } else {
        return res.redirect('/login');
    }
}

app.use('/', indexRouter);
app.use('/article', articleRouter);
app.use('/add', auth, addRouter);
app.use('/login', loginRouter);
app.use('/logout', auth, logoutRouter);
app.use('/registration', registrationRouter);

module.exports = app;