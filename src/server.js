import net from 'node:net';
import {parseRaw} from "./utils/parseRaw.js";
import {prepareResponse} from "./utils/prepareRespoonse.js";

const objectToString = (object) => {
    if(typeof object === 'string') {
        return object
    }

    return Object.entries(object).reduce((acc, [key, value]) => {
        acc += `${key}: ${value}\r\n`;
        return acc;
    }, '')
}

const responseHandler = (request) => {
    switch (request.path) {
        case '/': {
            return {
                statusRow: 'HTTP/1.1 200 OK',
                headers: {
                    contentType: 'text/plain',
                },
                body: 'hello word'
            };
        }
        case '/headers': {
            return {
                statusRow: 'HTTP/1.1 200 OK',
                headers: {
                    contentType: 'text/plain',
                },
                body: objectToString(request.headers),
            };
        }
        default: {
            return {
                statusRow: 'HTTP/1.1 404 Not Found',
                headers: {
                    contentType: 'text/plain',
                },
                body: 'Not Found'
            }
        }
    }
}

const server = net.createServer((socket) => {
    console.log('server');
    socket.on('data', (chunk) => {
        const raw = chunk.toString('latin1');

        console.log('raw', raw);
        const request =  parseRaw(raw);
        console.log('request', request);

        socket.write(prepareResponse(responseHandler(request)));

        socket.end();
    })
});

server.listen(3000, 'localhost');