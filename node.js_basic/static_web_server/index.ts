import * as http from 'http';
import * as fs from 'fs';
import p from 'path';
import * as url from 'url';

const server: http.Server = http.createServer();
const staticPath = p.resolve(__dirname, 'static')

server.on('request', (request, response) => {
    if (request.method !== 'GET') {
        response.statusCode = 405
        response.end("Method not supported.")
        return
    }

    const requestUrl = request.url!
    const pathname = url.parse(requestUrl).pathname!;
    let filePath = pathname.substring(1)
    if (filePath === "") {
        filePath = 'index.html'
    }

    fs.readFile(p.resolve(staticPath, filePath), (err, data) => {
        if (err) {
            console.log(err)
            if (err.errno === -2) {
                response.statusCode = 404
                fs.readFile(p.resolve(staticPath, '404.html'), (err, data) => {
                    if (err) {
                        response.end("File does not exist.")
                    } else {}
                    response.end(data)
                })
            } else if (err.errno === -21) {
                response.statusCode = 403
                response.end("Permission denied.")
            } else {
                response.statusCode = 500
                response.end("Server is busy, please try again later.")
            }
        } else {
            response.setHeader("Cache-Control", "public, max-age=3600")
            response.end(data);
        }
    })
})

export function startServer() {
    server.listen(8888, () => {
        console.log(server.address());
    })
};
