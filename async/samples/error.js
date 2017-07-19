async function f1() {
    throw new Error('error');
}
const f2 = async function () {
    await f1();
}
const f3 = async () => await f2();
async function run() {
    try {
        await f3();
    } catch (err) {
        console.log(err);
    }
    console.log('done');
}
run();