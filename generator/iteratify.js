module.exports.iteratify = function iteratify(fn) {
    return function () {
        let args = arguments;
        return (resume) => fn(...args, resume);
    }
}