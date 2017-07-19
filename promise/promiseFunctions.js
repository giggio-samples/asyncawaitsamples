const { getContents } = require('./promiseSimples');
const { isFile } = require('./promiseIf');
const { getDirs } = require('./promiseWhile');

module.exports = { getContents, isFile, getDirs };