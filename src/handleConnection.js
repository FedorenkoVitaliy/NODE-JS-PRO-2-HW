import {parseRaw} from "./utils/parseRaw.js";
import {prepareResponse} from "./utils/prepareResponse.js";
import {responseHandler} from "./utils/responseHandler.js";

export const handleConnection = (socket) => {
    socket.on('error', (err) => {
        console.error('socket error', err.code || err.message);
    });

    socket.on('data', (chunk) => {
        const raw = chunk.toString('latin1');
        const request =  parseRaw(raw);

        socket.write(prepareResponse(responseHandler(request)));
        socket.end();
    })
}