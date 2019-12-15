var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var articleShema = new Schema({
    title: String,
    preview: String,
    text: String
});

var Article = mongoose.model("Article", articleShema);
module.exports = Article;