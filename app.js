const http = require('http');
const routes = require('./routes');


// function rqListener(req, res) {

// }

// http.createServer(rqListener);

// you can also do this:

console.log(routes.someText)

const server = http.createServer(routes.handler);

server.listen(3000);

