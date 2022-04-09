import * as http from 'http';
import * as fs from 'fs';
import path from 'path';

const server: http.Server = http.createServer(); 
const staticPath = path.resolve(__dirname, 'static')

server.on('request', (request, response)=> {
    const url = request.url

    switch (url) {
        case '/index.html':
            response.setHeader('Content-type', 'text/html; charset=utf-8')
            fs.readFile(path.resolve(staticPath, 'index.html'), (err, data) => {
                if (err) throw err;
                response.end(data);
            })
            break;
        case '/style.css':
            response.setHeader('Content-type', 'text/css; charset=utf-8')
            fs.readFile(path.resolve(staticPath, 'style.css'), (err, data) => {
                if (err) throw err;
                response.end(data);
            })
            break;
        case '/main.js':
            response.setHeader('Content-type', 'application/x-javascript; charset=utf-8')
            fs.readFile(path.resolve(staticPath, 'main.js'), (err, data) => {
                if (err) throw err;
                response.end(data);
            })
            break;
        default:
            response.end('welcome')
    }



})

server.listen(8888, () => {
    console.log(server.address());
});