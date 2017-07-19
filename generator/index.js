const { getContents, getDirs, isFile } = require('./generatorFunctions');
const { run } = require('./run');
const { resolve } = require('path');

run(function* () {
    try {
        const contents = yield getContents(resolve(__dirname, '..'));
        console.log('Contents:');
        console.log(JSON.stringify(contents));
    } catch (err) {
        console.log('Contents:');
        console.trace(err);
    }
    show('Is file:', isFile(__filename));
    try {
        const dirs = yield getDirs(resolve(__dirname, '..'));
        console.log('Dirs:');
        console.log(JSON.stringify(dirs));
    } catch (err) {
        console.log('Dirs:');
        console.trace(err);
    }
    try {
        const itIs = yield isFile('naoexiste.js');
        console.log('Is file (error):');
        console.log(itIs);
    } catch (err) {
        console.log('Is file (error):');
        console.trace(err);
    }
})();

function show(msg, iterator) {
    run(function* () {
        try {
            const result = yield iterator;
            console.log(`${msg}\n${result}`);
        } catch (err) {
            console.log(msg);
            console.trace(err);
        }

    })();
}