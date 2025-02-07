const book = {
    title: 'Objetos imutáveis',
    category: 'Javascript',
    author: {
        name: 'John',
        email: 'john@gmail.com',
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