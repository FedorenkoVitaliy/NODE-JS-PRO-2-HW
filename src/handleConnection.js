import {parseRaw} from "./utils/parseRaw.js";
import {prepareResponse} from "./utils/prepareResponse.js";
import {responseHandler} from "./utils/responseHandler.js";

export const handleConnection = (socket) => {
    console.log('server');
    socket.on('data', (chunk) => {
        const raw = chunk.toString('latin1');
        const request =  parseRaw(raw);

        socket.write(prepareResponse(responseHandler(request)));
        socket.end();
    })
}