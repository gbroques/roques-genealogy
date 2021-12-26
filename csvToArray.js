export default function csvToArray(str, delimiter = ',') {
    const headers = parseHeaders(str, delimiter);

    const rowToObject = createRowToObject(headers, delimiter);

    const rows = parseRows(str);

    return rows.map(rowToObject);
}

function parseHeaders(str, delimiter) {
    return str
        .slice(0, str.indexOf('\n'))
        .split(delimiter);
}

function parseRows(str) {
    return str
        .slice(str.indexOf('\n') + 1)
        .split('\n')
        .filter(r => r);
}

function createRowToObject(headers, delimiter) {
    return row => {
        const values = row.split(delimiter);
        const el = headers.reduce((object, header, index) => {
            object[header] = values[index];
            return object;
        }, {});
        return el;
    };
}
