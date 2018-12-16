// const http = require('http');
const express = require('express');
const app = express();


// const routes = require('./routes');


// function rqListener(req, res) {

// }

// http.createServer(rqListener);

// you can also do this:

app.use((req, res, next) => {
  console.log("1st go round");
  next(); // allows the request to continue to the next middleware in line
})

app.use((req, res, next) => {
  console.log("2nd go round")
  res.send('<h1>Hello from express</h1>')
})

// const server = http.createServer(app);

// server.listen(3000);

app.listen(3000)

