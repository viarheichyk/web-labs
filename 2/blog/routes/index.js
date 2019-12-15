var express = require('express');
var router = express.Router();
var Article = require('../models/Article');

/* GET home page. */
router.get('/', function(req, res, next) {
  Article.find({}, function(err, docs){
    res.render('index', { articles: docs, isAuthenticated: req.isAuthenticated(), layout: false });
  });
});

module.exports = router;
