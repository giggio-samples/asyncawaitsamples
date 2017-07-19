const { resolve } = require('path');
const { promisify } = require('util');
const fs = require('fs');
const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);

module.exports.getDirs = function getDirs(dir) {
    return readdir(dir).then(contents => {
        const promises = [];
        for (const i in contents) {
            const content = contents[i];
            const contentFullPath = resolve(dir, contents[i]);
            promises.push(stat(contentFullPath).then(stats => {
                if (stats.isDirectory())
                    return content;
            }));
        }
        return Promise.all(promises).then(dirs => dirs.filter(d => d));
    })
};