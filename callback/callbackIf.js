const { stat } = require('fs');

module.exports.isFile = function isFile(contentPath, cb) {
    stat(contentPath, (err, stats) => {
        if (err) {
            cb(err);
            return;
        }
        cb(null, stats.isFile());
    });
};