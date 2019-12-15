var express = require('express');
var router = express.Router();

/* GET add page. */
router.get('/', function(req, res, next) {
    req.logOut();
    res.redirect('/');
});

module.exports = router;