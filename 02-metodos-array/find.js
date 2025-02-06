const values = [5,12,130,44]

//Retorna o primeiro valor que satisfaz a condição
const found = values.find(value => value > 10);

const fruits = [
    {name: 'apple', quantity: 23},
    {name: 'banana', quantity: 12},
    {name: 'orange', quantity: 9},
]

const fruit = fruits.find(fruit => fruit.quantity > 10)
console.log(fruit)