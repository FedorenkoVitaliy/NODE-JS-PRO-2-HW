export const prepareResponse = ({statusRow, headers, body}) => {
    const prepareBody = `${body}\n`;

    return (
        `${statusRow}\r\n` +
        `Content-Type: ${headers.contentType}\r\n` +
        `Content-Length: ${Buffer.byteLength(prepareBody)}\r\n` +
        '\r\n'+
        prepareBody
    );
}