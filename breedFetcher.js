const request = require('request');
const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error){
      callback(error, null);
      return;
    }
    const data = JSON.parse(body);
    if (!Array.isArray(data)){
      if (typeof data === 'object') {
        if (data.status === 404) {
          callback('Breed url not found', null);
          return;
        }else {
          callback('unknown error:' + body, null);
          return;
        }
      }else {
        callback('Total unknown error', null);
        return;
      }
      
    }
    if (data.length === 0) {
      callback('Breed not found', null);
      return;
    }
    // console.log(body);
    // console.log(data);
    
    
    callback(null, data[0].description);
  });
};

module.exports.fetchBreedDescription = fetchBreedDescription;