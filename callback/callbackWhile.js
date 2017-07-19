const { readdir, stat } = require('fs');
const { resolve } = require('path');

module.exports.getDirs = function getDirs(dir, cb) {
    readdir(dir, (err, contents) => {
        if (err) {
            cb(err);
            return;
        }
        let files = [];
        for (const i in contents) {
            const content = contents[i];
            const contentFullPath = resolve(dir, contents[i]);
            stat(contentFullPath, (err, stats) => {
                if (err) {
                    cb(err);
                    return;
                }
                if (stats.isDirectory())
                    files.push(content);
                if (i == contents.length - 1)
                    cb(null, files);
            })
        }
    })
};