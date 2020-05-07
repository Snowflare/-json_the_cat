const request = require('request');
const arg = process.argv.slice(2);
request(`https://api.thecatapi.com/v1/breeds/search?q=${arg[0]}`, (error, response, body) => {
     
  if (body === '[]') {
    console.log('Breed Not Found');
  } else if (error !== null) {
    console.log(error);
    
  } else {
    const data = JSON.parse(body);
    console.log('statusCode:', response && response.statusCode);
    console.log(data[0].description);
  }
  
});