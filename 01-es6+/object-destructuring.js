'use strict'

const product = {
    description: 'Teclado',
    price: 150,
}

const {description, price} = product
console.log(description)
console.log(price)


function newProduct({description, price}) {
   console.log('Novo produto!!!!!')
    console.log(description)
    console.log(price)
}

newProduct(product)