import axios from "axios";

// Export an object containing methods we'll use for accessing the Wikipedia API

export default {
  search: function(query) {
    return axios.get('/api/products?q=' + query);
  },
  addToCart: function(item) {
      return axios.post('/api/products', item);
  }
};
