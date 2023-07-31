// function add (first, second) {
//     second = second || 0;
//     const total = first + second;

//     return total;
// }

function add (first , second = 0) {
    const result = first + second;
    return result;
}

const result = add (10)
console.log(result);