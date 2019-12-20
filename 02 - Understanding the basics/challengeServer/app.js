const http = require('http')

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>This is a challeng</title></head>');
    res.write('<body><h1>This is just the main page. Using a h1 tag</h1>');
    res.write('<form action="/create-user" method="POST"><input type="text" name="message"><button type="submit">Send</button></form>')
    res.write('</body>');
    res.write('</html>');

    return res.end();

  }
  if (url === '/users') {
    res.write('<html>');
    res.write('<head><title>This is a challeng</title></head>');
    res.write('<body><h1>This is a list of users</h1>');
    res.write('<ul><li>User 1</li></ul > ');
    res.write('<ul><li>User 2</li></ul > ');
    res.write('<ul><li>User 3</li></ul > ');
    res.write('<ul><li>User 4</li></ul > ');
    res.write('<ul><li>User 5</li></ul > ');
    res.write('</body>')
    res.write('</html>');
    return res.end();

  }

  if (url === '/create-user' && method === 'POST')
})

server.listen(4444)