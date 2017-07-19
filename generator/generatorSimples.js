const { readdir } = require('fs');
const { iteratify } = require('./iteratify');

module.exports.getContents = iteratify(readdir);