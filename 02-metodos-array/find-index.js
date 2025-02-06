const values = [4,3,5,8,9,7];

//Obtem o primeiro índice que satisfaz a condição
console.log(values.findIndex(value => value > 4));

//Quando não encontra retorna -1
console.log(values.findIndex(value => value > 10));