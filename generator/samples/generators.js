function* infiniteNumbers() {
    for (let i = 0; true; i++) {
        yield i;
    }
}

function* fibonacci() {
    let [fn1, fn2] = [0, 1];
    while (true) {
        yield fn1;
        [fn1, fn2] = [fn2, fn2 + fn1];
    }
}
for (const n of fibonacci()) {
    if (n === 927372692193079200000) break;
    process.stdout.write(`${n} `);
}