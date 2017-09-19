const http = require('http');

const server = http.createServer((req, res) => {
    res.on('finish', ()=> {
        console.log('finish');
    });
    req.on('end', ()=> {
        console.log('end');
    });
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.write('hello world');
    res.end();
});
server.on('connection', ()=> {
    console.log('connection');
});
server.listen(8000);
