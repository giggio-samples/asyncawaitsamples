module.exports.run = function run(makeGenerator) {
    return function () {
        var generator = makeGenerator.apply(this, arguments);
        var continuable, sync, value;
        next();
        function next() {
            while (!(continuable = generator.next(value)).done) {
                continuable = continuable.value;
                sync = undefined;
                continuable(callback);
                if (sync === undefined) {
                    sync = false;
                    break;
                }
            }
        }
        function callback(err, val) {
            if (err) return generator.throw(err);
            value = val;
            if (sync === undefined) {
                sync = true;
            }
            else {
                next();
            }
        }
    }
};