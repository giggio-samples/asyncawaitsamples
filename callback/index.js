const { getContents, getDirs, isFile } = require('./callbackFunctions');
const { resolve } = require('path');

getContents(resolve(__dirname, '..'), (err, contents) => {
    console.log('Contents:');
    show(err, JSON.stringify(contents));
});

isFile(__filename, (err, itIs) => {
    console.log('Is file:');
    show(err, itIs);
});

isFile('naoexiste.js', (err, itIs) => {
    console.log('Is file (error):');
    show(err, itIs);
});

getDirs(resolve(__dirname, '..'), (err, dirs) => {
    console.log('Dirs:');
    show(err, JSON.stringify(dirs));
});

function show(err, result) {
    if (err) {
        console.trace(err);
        return;
    }
    console.log(result);
}