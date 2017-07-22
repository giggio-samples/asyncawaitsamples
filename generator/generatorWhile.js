const { readdir, stat } = require('fs');
const { resolve } = require('path');

module.exports.getDirs = function getDirs(dir) {
    return resume => readdir(dir, (err, contents) => {
        if (err)
            return resume(err);
        let dirs = [];
        for (const i in contents) {
            const content = contents[i];
            const contentFullPath = resolve(dir, content);
            stat(contentFullPath, (err, stats) => {
                if (err)
                    return resume(err);
                if (stats.isDirectory())
                    dirs.push(content);
                if (i == contents.length - 1)
                    resume(null, dirs);
            });
        }
    });
};