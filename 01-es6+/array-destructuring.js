'use strict'

const data = ['Danilo Carlos Marques', 'marquesdanilocarlos@gmail.com']

const [username, email] = data
console.log(username)
console.log(email)

const fruits = ['Banana', 'Apple', 'Orange']

//Obtém o primeiro item do array na variável
const [primeira] = fruits
console.log(primeira)

//Obtém o segundo item do array na variável
const [,segunda] = fruits
console.log(segunda)

//Obtém o segundo item do array na variável
const [,,terceira] = fruits
console.log(terceira)