import tls from 'node:tls';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

import {handleConnection} from "./handleConnection.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const certPath = path.join(__dirname, 'certs', 'localhost-cert.pem');
const keyPath = path.join(__dirname, 'certs', 'localhost-key.pem');

const server = tls.createServer(
    { cert: readFileSync(certPath), key: readFileSync(keyPath) },
    handleConnection
);

server.listen(3443, 'localhost');