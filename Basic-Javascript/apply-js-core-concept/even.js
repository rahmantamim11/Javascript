function isEven(number) {
    const remainder = number % 2;
   if (remainder === 0){
    // console.log('That is a Even Number');
    return true;
   }
   else {
    // console.log('That is a Odd Number')
    return false;
   }
}

//  isEven(144);
//  isEven(257);

const myEvenNumber = isEven(144);
const herEvenNumber = isEven(257);
console.log(myEvenNumber, herEvenNumber);



