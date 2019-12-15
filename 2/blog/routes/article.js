var express = require('express');
var router = express.Router();
var Article = require('../models/Article');

/* GET article page. */
router.get('/', function(req, res, next) {
    if(req.query.id) {
        Article.findById(req.query.id, function(err, doc){
            res.render('article', { article: doc, isAuthenticated: req.isAuthenticated(), layout: false });
        });
    }
});

module.exports = router;
