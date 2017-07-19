const { resolve } = require('path');
const { promisify } = require('util');
const fs = require('fs');
const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);

module.exports.getDirs = async function getDirs(dir) {
    const contents = await readdir(dir);
    const dirs = [];
    for (const i in contents) {
        const content = contents[i];
        const contentFullPath = resolve(dir, contents[i]);
        const stats = await stat(contentFullPath);
        if (stats.isDirectory())
            dirs.push(content);
    }
    return dirs;
};