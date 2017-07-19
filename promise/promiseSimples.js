const { readdir } = require('fs');

module.exports.getContents = function getContents(dir) {
    return new Promise((resolve, reject) =>
        readdir(dir, (err, contents) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(contents);
        }))
};