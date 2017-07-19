const { promisify } = require('util');
const stat = promisify(require('fs').stat);

module.exports.isFile = (contentPath) =>
    stat(contentPath).then(stats => stats.isFile());