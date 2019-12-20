const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>Enter a message</title></head>');
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
    res.write('</html>');

    return res.end();

  }

  if (url === '/message' && method === 'POST') {
    const body = [];
    req.on('data', (chunk) => {
      body.push(chunk)
    })


    return req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString()
      const message = parsedBody.split('=')[1]
      fs.writeFile('message.txt', message, err => {
        res.statusCode = 302
        res.setHeader('Location', '/')
        return res.end()
      })
    })

  }

  res.setHeader('Content-Type', 'text/html')
  res.write('<html>')
  res.write('<head><title>My First server on node</title></head>')
  res.write('<body><h1>Hello, this is my first server made on Node.js</h1></body>')
  res.write('</html>')

  return res.end()
});

server.listen(4444)


