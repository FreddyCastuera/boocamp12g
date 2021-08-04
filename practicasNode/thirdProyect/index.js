var http = require('http');
let jsonResonse = {
    nombre:'jorge',
    apellido:'castuera'
}
http.createServer((request, response) =>{
    console.log('path:',request.url)
    console.log('method',request.method)
    if(request.method=='GET' && request.url=='/freddy'){
        response.writeHead(200, {'Content-Type': 'application/json'});
        response.write(JSON.stringify(jsonResonse))
   }
    else{
        response.writeHead(404, {'Content-Type': 'application/json'});
        response.write('bad request')
    }
    response.end();
}).listen(8080,()=>{console.log('lanzamos un servidor en el puerto 8080')});

http.createServer((request, response) =>{
    console.log('path:',request.url)
    console.log('method',request.method)
    response.writeHead(200, {'Content-Type': 'text/plain'});
    if(request.method=='GET' && request.url == '/mentors'){
        response.write('aqui encontraras los mentores de kodemia');
    }
    else if(request.method == 'POST' && request.url=='/mentors'){
        response.write('aqui podras crear un mentor');
    }
    else{
        response.write('aqui no hay nada')
    }
    response.end();
}).listen(8081,()=>{console.log('lanzamos un servidor en el puerto 8081')});