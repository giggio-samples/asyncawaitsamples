module.exports.iteratify = function iteratify(fn) {
    return function () {
        let args = arguments;
        return function (resume) {
            fn(...args, resume);
        }
    }
}