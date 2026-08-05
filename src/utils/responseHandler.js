export const objectToString = (object) => {
    if(typeof object === 'string') {
        return object
    }

    return Object.entries(object).reduce((acc, [key, value]) => {
        acc += `${key}: ${value}\r\n`;
        return acc;
    }, '')
}

export const responseHandler = (request) => {
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
