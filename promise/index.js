const { getContents, getDirs, isFile } = require('./promiseFunctions');
const { resolve } = require('path');

show('Contents:', getContents(resolve(__dirname, '..'))
    .then(contents => JSON.stringify(contents)));

show('Is file:', isFile(__filename));

show('Is file (error):', isFile('naoexiste.js'));

show('Dirs:', getDirs(resolve(__dirname, '..')).then(dirs => JSON.stringify(dirs)));

function show(msg, promise) {
    promise.then(
        result => console.log(`${msg}\n${result}`),
        err => {
            console.log(msg);
            console.trace(err);
        });
}