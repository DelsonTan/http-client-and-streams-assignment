var https = require('https');

var options = {
  host: 'www.example.org',
  path: '/'
};

// called by https when the request is made.
var callback = function() {
  console.log('In request handler callback!');
}

console.log("I'm about to make the request!");

https.request(options, callback).end();

console.log("I've made the request!");