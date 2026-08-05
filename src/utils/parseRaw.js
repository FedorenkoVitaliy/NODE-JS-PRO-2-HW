export const parseRaw = (data) => {
    const [head, body] = data.split('\r\n\r\n', 2);
    const [statusRow, ...rawHeaders] = head.split('\r\n');
    const [method, path] = statusRow.split(' ');
    const headers = rawHeaders.reduce((acc, item) => {
        const [key, value] = item.split(': ', 2);
        acc[key.toLowerCase()] = value;
        return acc;
    },{})

    return {
        method: method,
        path: path,
        headers,
        body
    };
}