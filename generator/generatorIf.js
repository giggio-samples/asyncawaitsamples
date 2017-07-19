const { stat } = require('fs');

module.exports.isFile = function isFile(contentPath) {
    return resume => stat(contentPath, (err, stats) => {
        if (err) return resume(err);
        resume(null, stats.isFile());
    });
};