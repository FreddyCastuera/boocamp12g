var http = require('http');

http.createServer(function (req, res) {
    console.log('url',req.url)
    console.log('method',req.method)

    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World!');
}).listen(8000,()=>{console.log('escuchando en el puerto 8080')});