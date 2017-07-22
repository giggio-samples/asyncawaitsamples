const { readdir, stat } = require('fs');
const { resolve } = require('path');

module.exports.getDirs = function getDirs(dir, cb) {
    readdir(dir, (err, contents) => {
        if (err) {
            cb(err);
            return;
        }
        let dirs = [];
        for (const i in contents) {
            const content = contents[i];
            const contentFullPath = resolve(dir, content);
            stat(contentFullPath, (err, stats) => {
                if (err) {
                    cb(err);
                    return;
                }
                if (stats.isDirectory())
                    dirs.push(content);
                if (i == contents.length - 1)
                    cb(null, dirs);
            })
        }
    })
};