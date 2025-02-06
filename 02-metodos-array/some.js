const ages = [15, 30, 39, 78, 22];

//True se pelo menos um item do array atender a condição
const result = ages.some(age => age < 18)

console.log(result);