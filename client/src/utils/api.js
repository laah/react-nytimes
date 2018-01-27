import axios from "axios";

const api = {
  // Query NYT API
  searchNYT: function(topic, start_year, endYear) {
    const query = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=a5c6ac1a3e974f189b0bf09c03378d7b" +
    "&q=" + topic + "&begin_date=" + start_year + "0101&end_date=" + endYear + "0101";
    return axios.get(query);
  },
  // Retrieves saved articles from the db
  getNYTArticle: function() {
    return axios.get("/api/articles");
  },
  // Saves a new article to the db
  saveNYTArticle: function(articleObj) {
    return axios.post("/api/articles", articleObj);
  },
  // Deletes an article from the db
  deleteNYTArticle: function(id) {
    return axios.delete(`/api/articles/${id}`);
  }
};

export default api;
