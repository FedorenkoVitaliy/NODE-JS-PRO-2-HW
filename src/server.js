import net from 'node:net';
import {handleConnection} from "./handleConnection.js";

const server = net.createServer(handleConnection);

server.listen(3000, 'localhost');