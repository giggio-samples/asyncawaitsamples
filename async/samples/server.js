const http = require('http');

let times = 0;
const srv = http.createServer((req, res) => {
    const thisTime = ++times;
    console.time(`(${thisTime}) ${req.url}`);
    setTimeout(function () {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(`Request #${thisTime}`);
        console.timeEnd(`(${thisTime}) ${req.url}`);
    }, 700);
});
srv.listen(3000, () => console.log('Listening on http://localhost:3000/'));