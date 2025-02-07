const address = {
    street: 'New York',
    number: 15
}

//Atribui por referência
const address2 = address
//Modifica os dois objetos, por referência
address2.number = 20

console.log(address)
console.log(address2)

//Cria um novo, clonando
const address3 = {...address, number: 66}
//address3.number = 50
console.log(address3)

const fruits = ['Orange', 'Apple']

//Atribui por referência
const fruits2 = fruits
//Modifica os dois objetos, por referência
fruits2.push('Watermelon')

console.log(fruits)
console.log(fruits2)

//Cria novo, clonando...
const fruits3 = [...fruits, 'Strawberry'];
fruits3.push('Watermelon')

console.log(fruits3)