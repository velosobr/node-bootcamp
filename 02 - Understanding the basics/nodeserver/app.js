const http = require('http')

const fs = require('fs')

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  // process.exit();
  const url = req.url;
  const method = req.url;


  if (url === '/') {

    res.write('<html>')
    res.write('<head><title>My First server on node</title></head>')
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"></form>Hello, this is my first server made on Node.js</body>')
    res.write('</html>')

    return res.end()

  }

  if (url === '/message' && method === 'POST') {
    fs.writeFileSync('message.txt', 'DUMMY')
    res.statusCode = 302
    res.setHeader('Location', '/')
    return res.end()
  }


  res.setHeader('Content-Type', 'text/html')

  res.write('<html>')

  res.write('<head><title>My First server on node</title></head>')
  res.write('<body><h1>Hello, this is my first server made on Node.js</h1></body>')
  res.write('</html>')

  return res.end()






});

server.listen(3333)


