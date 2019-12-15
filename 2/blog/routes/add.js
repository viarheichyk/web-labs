var express = require('express');
var router = express.Router();
var Article = require('../models/Article');

/* GET add page. */
router.get('/', function(req, res, next) {
    res.render('add', { layout: false });
});

/* POST add page. */
router.post('/', function(req, res, next) {
    var title = req.body.title;
    var preview = req.body.preview;
    var text = req.body.text;

    if(title && preview && text) {
        Article.create({ title: title, preview: preview, text: text }, function(err, doc){
            if(err) return console.log(err);
            res.redirect('/');
        });
    }
});

module.exports = router;