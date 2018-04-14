const { getContents, getDirs, isFile } = require('./asyncFunctions');
//const { getContents, getDirs, isFile } = require('../promise/promiseFunctions');
const { resolve } = require('path');

function run() {
    show('Contents:', getContents(resolve(__dirname, '..')));

    show('Is file:', isFile(__filename));

    show('Is file (error):', isFile('naoexiste.js'));

    show('Dirs:', getDirs(resolve(__dirname, '..')));
}

async function show(msg, promise) {
    try {
        const result = await promise;
        console.log(`${msg}\n${JSON.stringify(result)}`);
    } catch (err) {
        console.log(msg);
        console.trace(err);
    }
}

run();