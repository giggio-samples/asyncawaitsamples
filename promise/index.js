const { getContents, getDirs, isFile } = require('./promiseFunctions');
const { resolve } = require('path');

show('Contents:', getContents(resolve(__dirname, '..')));

show('Is file:', isFile(__filename));

show('Is file (error):', isFile('naoexiste.js'));

show('Dirs:', getDirs(resolve(__dirname, '..')));

function show(msg, promise) {
    promise.then(
        result => console.log(`${msg}\n${JSON.stringify(result)}`),
        err => {
            console.log(msg);
            console.trace(err);
        });
}