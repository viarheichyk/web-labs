var express = require('express');
var router = express.Router();
var passport = require('passport');

/* GET login page. */
router.get('/', function(req, res, next) {
    res.render('login', { layout: false });
});

/* POST add page. */
router.post('/', function(req, res, next) {
    passport.authenticate('local', function(err, user) {
        if (!err) {
            req.logIn(user, function(err){
                if (!err) {
                    return res.redirect('/');
                } else {
                    res.redirect('/login');
                }
            });
        } else {
            res.redirect('/login');
        }
    })(req, res, next);
});

module.exports = router;