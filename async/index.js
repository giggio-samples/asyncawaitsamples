const { getContents, getDirs, isFile } = require('./asyncFunctions');
//const { getContents, getDirs, isFile } = require('../promise/promiseFunctions');
const { resolve } = require('path');

async function run() {
    show('Contents:', async () => {
        const contents = await getContents(resolve(__dirname, '..'));
        return JSON.stringify(contents);
    });

    show('Is file:', isFile(__filename));

    show('Is file (error):', isFile('naoexiste.js'));

    show('Dirs:', async () => {
        const dirs = await getDirs(resolve(__dirname, '..'));
        return JSON.stringify(dirs);
    });
}

async function show(msg, promiseOrFn) {
    try {
        const result = typeof promiseOrFn === 'function'
            ? await promiseOrFn()
            : await promiseOrFn;
        console.log(`${msg}\n${result}`);
    } catch (err) {
        console.log(msg);
        console.trace(err);
    }
}

run();