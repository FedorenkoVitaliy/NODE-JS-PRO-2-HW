import {parseRaw} from "./utils/parseRaw.js";
import {prepareResponse} from "./utils/prepareRespoonse.js";
import {responseHandler} from "./utils/responseHandler.js";

export const handleConnection = (socket) => {
    console.log('server');
    socket.on('data', (chunk) => {
        const raw = chunk.toString('latin1');

        console.log('raw', raw);
        const request =  parseRaw(raw);
        console.log('request', request);

        socket.write(prepareResponse(responseHandler(request)));

        socket.end();
    })
}