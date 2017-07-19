async function metodoA() {
    const resultado1 = await metodoB('a');
    const resultado2 = await metodoC(resultado1);
    console.log(resultado2);
}
async function metodoB(v) {
    await sleep(100);
    return `${v}_b`;
}
async function metodoC(v) {
    await sleep(100);
    return `${v}_c`;
}
const sleep = (ms) =>
    new Promise(resolve => setTimeout(() => resolve(), ms));

metodoA();