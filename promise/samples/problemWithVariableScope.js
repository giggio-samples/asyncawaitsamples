const { promisify } = require('util');
const { basename } = require('path');
const stat = promisify(require('fs').stat);

const isFile = (contentPath) =>
    stat(contentPath)
        .then(stats => {
            const name = basename(contentPath);
            return [name, stats.isFile()];
        })
        .then(([name2, isFile]) => console.log(isFile, name2));

isFile(__filename);