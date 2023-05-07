const http2 = require('http2');
const fs = require('fs');

const server = http2.createSecureServer({
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.crt')
});

server.on('error', (err) => console.error(err));

server.on('stream', (stream, headers) => {
  // برای پاسخ به درخواست ها، کد اینجا قرار می گیرد
  stream.respond({
    'content-type': 'text/html',
    ':status': 200
  });
  stream.end('<h1>Hello From CMORGH Team</h1>');
});

server.listen(8443);
console.log('Server is listening on port 8443');
