function maxInArray (numbers)
 {
    let largest = numbers [0];
    for (let i = 0; i < numbers.length; i++) {
       
        const index = i;
        const element = numbers[index];
        if ( element > largest) {
            largest = element;
        }
    }
   return largest;
}

const height = [167, 190, 120, 165, 137];
const tallest = maxInArray(height);
console.log('Tallest person is:', tallest);




function minINArray (numbers1) {
    let smallest = numbers1 [0];
    for (let i = 0; i < numbers1.length; i++) {
        const index = 1;
        const element = numbers1[index];
        if (element < smallest) {
            smallest = element;
                }
    }

    return smallest;
}

const height1 = [120, 105, 160, 250, 114];

const smallest = minINArray(height1);
console.log('Smallest Person is', smallest);




















