const { promisify } = require('util');
const stat = promisify(require('fs').stat);

module.exports.isFile = async function (contentPath) {
    const stats = await stat(contentPath);
    return stats.isFile();
}