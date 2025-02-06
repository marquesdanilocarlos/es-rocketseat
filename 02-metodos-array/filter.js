const words = ['Javascript', 'CSS', 'HTML', 'Web']

const result = words.filter(word => word.length > 3)
console.log(result)


const products = [
    {description: 'Teclado', price: 250, promotion: true},
    {description: 'Mouse', price: 150, promotion: false},
    {description: 'Monitor', price: 550, promotion: true},
]

const promotionProducts = products.filter(product => product.promotion);
console.log(promotionProducts)