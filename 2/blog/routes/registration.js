var express = require('express');
var router = express.Router();
var User = require('../models/User');

/* GET registration page. */
router.get('/', function(req, res, next) {

    if (!req.isAuthenticated()) {
        res.render('registration', { layout: false });
    } else {
        res.redirect('/');
    }
    
});

/* POST registration page. */
router.post('/', function(req, res, next) {
    var user = {
        username: req.body.username,
        password: req.body.password
    }

    if(user.username && user.password) {
        User.findOne({ username: user.username }, function(err, response) {
            if (!response) {
                User.create(user, function(err) {
                    if (err) {
                        console.log(err);
                        res.redirect('/registration');
                    } else {
                        res.redirect('/login');
                    }
                });
            } else {
                res.redirect('/registration');
            }
        });
    }
});

module.exports = router;