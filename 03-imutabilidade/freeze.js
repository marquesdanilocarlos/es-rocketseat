/***** Shallow Freeze ***/

const book = {
    title: 'Objetos imutáveis',
    category: 'Javascript',
    author: {
        name: 'John',
        email: 'john@gmail.com'
    }
}

console.log(book)

//Congelamento raso. Impede a modificação de atributos em primeiro nével
Object.freeze(book)
//Não deixa modificar
book.category = 'PHP'

//Deixa modificar
book.author.name = 'Maria'
console.log(book)

/************ Deep Freeze ****************/

function deepFreeze(obj) {
    //Obtém array com todas as propriedades do objeto
    const props = Reflect.ownKeys(obj)

    props.forEach((prop) => {
        const value = book[prop]
        if (value && typeof value === 'object' || typeof value === 'function') {
            deepFreeze(value)
        }
    })
    return Object.freeze(obj)
}

const freezeBook = deepFreeze(book)
freezeBook.author.name = 'Joana'
console.log(freezeBook)


