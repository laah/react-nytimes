// Dependecies
const express = require("express");
const mongoose = require("mongoose");
const bluebird = require("bluebird");
const bodyParser = require("body-parser");
const path = require("path");

const PORT = process.env.PORT || 3001;
mongoose.Promise = bluebird;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
} else {
  app.use(express.static(__dirname + "/client/public"));
}

// enable CORS, use:
// https://enable-cors.org/server_expressjs.html
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next();
});

// Routing
var articlesController = require("./server/controllers/article-controller");
var router = new express.Router();

router.get("/api/articles", articlesController.find);
router.post("/api/articles", articlesController.insert);
router.delete("/api/articles/:id", articlesController.delete);
router.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.use(router);

const db = process.env.MONGODB_URI || "mongodb://localhost/nyt-react";
mongoose.connect(db, function(error) {
  if (error) {
    console.error(error);
  }
});

// Start the server magically
app.listen(PORT, function() {
  console.log(`🌎 ==> Server now listening on magical port ${PORT}!`);
});
