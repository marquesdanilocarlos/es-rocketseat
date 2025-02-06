const values = [1, 2, 3, 4, 5];

const sum = values.reduce((acc, currentValue, index) => {
    console.log('ACUMULADOR', acc)
    console.log('CURRENT VALUE', currentValue)
    console.log('INDEX', index)

    console.log('SOMA', acc+currentValue)
    console.log('#######################')

    return acc + currentValue;
}, 0);

console.log(sum);