// const http = require('http');
const express = require('express');
const app = express();


// const routes = require('./routes');


// function rqListener(req, res) {

// }

// http.createServer(rqListener);

// you can also do this:

app.use('/', (req, res, next) => {
  console.log("this always runs")
  next();
})

app.use('/add-product', (req, res, next) => {
  console.log("2nd go round")
  res.send('<h1>Express Add product page</h1>')
})

app.use('/', (req, res, next) => {
  console.log("2nd go round")
  res.send('<h1>Hello from express</h1>')
})

// const server = http.createServer(app);

// server.listen(3000);

app.listen(3000)

