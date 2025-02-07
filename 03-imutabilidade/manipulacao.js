const book = {
    title: 'Objetos imutáveis',
    category: 'Javascript',
    author: {
        name: 'John',
        email: 'john@gmail.com'
    }
}

const updatedBook = {
    ...book,
    title: 'Manipulação de objetos imutáveis',
    category: 'HTML',
    type: 'Kindle'
}

console.log(book)
console.log(updatedBook)

//Remover propriedade utilizando desestruturação (rest operator)
const {category, ...bookWithoutCategory} = updatedBook
console.log(bookWithoutCategory)