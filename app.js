// const http = require('http');

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
})

// const routes = require('./routes');

// function rqListener(req, res) {

// }

// http.createServer(rqListener);

// you can also do this:



// const server = http.createServer(app);

// server.listen(3000);

app.listen(3000);

