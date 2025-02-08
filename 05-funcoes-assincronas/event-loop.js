//Executa primeiro de forma síncrona
console.log(1)

//Executa depois do 4, de forma assíncrona. Microtasks são executadas antes de temporizadores e promises.
queueMicrotask(() => {
    console.log(2)
})

//Executado por último, pois é uma MacroTask, que é a última prioridade no EventLoop
setTimeout(() => {
    console.log(3)
}, 1000)

//Executa depois do 1 de forma síncrona
console.log(4)

//Resolvida imediatamente, mas adiciona uma microtask no EventLoop. A prioridade é a mesma do 2, mas por ordem de declaração,
//executou depois do 2
Promise.resolve(true).then(() => {
    console.log(5)
})