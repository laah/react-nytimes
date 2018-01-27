var mongoose_require = require("mongoose");

var Schema = mongoose_require.Schema;

var articleSchema = new Schema({
  title: String,
  date: Date,
  url: String
});

var Article = mongoose_require.model("Article", articleSchema);

module.exports = Article;
