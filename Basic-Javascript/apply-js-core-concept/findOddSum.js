// Even Sum

function getSumOfAnArray(numbers) {
    let sum = 0;
for (let i = 0; i < numbers.length; i++){
    const index = i;
    const element = numbers[index];
    sum = sum + element;
    // console.log(index, element, sum);
   }
   return sum;
}

// Odd Sum

function getOddNumbersOfAnArray (numbers) {
    const oddNumbers = [];
    for ( let i = 0; i < numbers.length; i++) {
    const index = i;
    const element = numbers[index];
    if (element % 2 !== 0) {
        console.log(index, element);
        oddNumbers.push(element);
    }
    }
    return oddNumbers;
}

const myNumbers = [12, 65, 45, 33, 98, 68];
const oddNumbers = getOddNumbersOfAnArray(myNumbers);
console.log(oddNumbers);
const oddNumbersSum = getSumOfAnArray (oddNumbers);
console.log('Odd Numbers Sum', oddNumbersSum);