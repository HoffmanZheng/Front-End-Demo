import * as http from 'http';
console.log(123);
const server = http.createServer();

server.on('request', ()=> {
    console.log('hi')
})

server.listen(8888);