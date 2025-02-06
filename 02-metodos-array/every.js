const ages = [15, 30, 39, 78];

//True se todos os itens atendem a condição, senão false
const allMajor = ages.every(age => age >= 18)

console.log(allMajor);