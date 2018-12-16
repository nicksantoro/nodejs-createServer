const fs = require('fs');

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;


  if (url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>')
    res.write('<head><title>Nick</title></head>')
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">submit</button><form></body>')
    res.write('</html>')
    return res.end();

  }

  if (url === '/message' && method === 'POST') {
    const body = [];
    req.on('data', (chunk) => {
      console.log(chunk);
      body.push(chunk)
    });
    return req.on('end', () => {
      // need to buffer
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      const newMessage = message.replace(/\+/g, ' ');
      fs.writeFile('message.txt', newMessage, err => {
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
      });
    })
  }

  res.setHeader('Content-Type', 'text/html');
  res.write('<html>')
  res.write('<head></head>')
  res.write('<body>what the hell</body>')
  res.write('</html>')
  res.end();

}

module.exports = {
  handler: requestHandler,
  someText: "this is some text"
}