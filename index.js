const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  if (req.url.startsWith('/files/')) {
    const filePath = path.join(__dirname, req.url);
    fs.access(filePath, fs.constants.F_OK, (err) => {
      if (err) {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('File not found');
      } else {
        const fileStream = fs.createReadStream(filePath);
        fileStream.pipe(res);
      }
    });
  } else {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('Not found');
  }
});

server.listen(3000);
console.log('Server listening on port 3000');