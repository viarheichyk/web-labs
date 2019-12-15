var passport = require('passport');
var LocalStrategy = require('passport-local');
var mongoose = require("mongoose");
var User = require('./models/User');

passport.serializeUser(function(user, done) {
    done(null, user.username);
});

passport.deserializeUser(function(username, done) {
    User.findOne({ username: username }, function(err, user){
        if (user) {
            var _user = username === user.username ? user : false;
            done(null, _user);
        }
    });
});

passport.use(new LocalStrategy(
    function(username, password, done) {
        User.findOne({ username: username }, function(err, user){            
            if (user && username === user.username && password === user.password) {
                return done(null, user);
            } else {
                return done(null, false);
            }
        });
    }
  ));