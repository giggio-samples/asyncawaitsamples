async function f1() {
    throw new Error('error');
}
const f2 = async function () {
    await f1();
}
const f3 = async () => await f2();