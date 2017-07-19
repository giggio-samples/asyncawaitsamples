const { promisify } = require('util');
const http = require('http');

async function run() {
    await runSequential();
    await runParallel();
}

async function runSequential() {
    console.log('******* sequestial ********')
    console.time('***** end sequential ******')
    await request();
    await request();
    await request();
    console.timeEnd('***** end sequential ******')
}

async function runParallel() {
    console.log('******** parallel *********')
    console.time('****** end parallel ******')
    await Promise.all([request(), request(), request()]);
    console.timeEnd('****** end parallel ******')
}

let requests = 0;
async function request() {
    const requestId = ++requests;
    console.time(`end #${requestId}`);
    try {
        const res = await get('http://localhost:3000');
        res.setEncoding('utf8');
        res.on('data', chunk => console.log(`#${requestId} response: ${chunk}`));
        let resolveEnded;
        let ended = new Promise(resolve => resolveEnded = resolve);
        res.on('end', resolveEnded);
        await ended;
        console.timeEnd(`end #${requestId}`);
    } catch (err) {
        console.error(`#${requestId} err`);
    }
};

http.get[promisify.custom] = function getAsync(options) {
    return new Promise((resolve, reject) => {
        http.get(options, (response) => {
            response.end = new Promise((resolve) => response.on('end', resolve));
            resolve(response);
        }).on('error', reject);
    });
};
const get = promisify(http.get);
run();