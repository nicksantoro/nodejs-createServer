// const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(adminRoutes);
app.use(shopRoutes);



// const routes = require('./routes');

// function rqListener(req, res) {

// }

// http.createServer(rqListener);

// you can also do this:



// const server = http.createServer(app);

// server.listen(3000);

app.listen(3000);

