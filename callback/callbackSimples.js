const { readdir } = require('fs');

module.exports.getContents = function getContents(dir, cb) {
    readdir(dir, (err, contents) => {
        if (err) {
            cb(err);
            return;
        }
        cb(null, contents);
    })
};