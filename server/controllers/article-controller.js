var NYTArticle = require("../models/NYTArticle");

module.exports = {
  find: function(request, response) {
    NYTArticle.find().then(function(document) {
      response.json(document);
    }).catch(function(error_if_it_happens) {
      response.json(error_if_it_happens);
    });
  },
  insert: function(request, response) {
    NYTArticle.create(request.body).then(function(document) {
      response.json(document);
    }).catch(function(error_if_it_happens) {
      response.json(error_if_it_happens);
    });
  },
  delete: function(request, response) {
    NYTArticle.remove({
      _id: request.params.id
    }).then(function(document) {
      response.json(document);
    }).catch(function(error_if_it_happens) {
      response.json(error_if_it_happens);
    });
  }
};