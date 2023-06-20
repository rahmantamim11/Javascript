var name = 'Tamim';
var roll = 5;
var isTrue = true;

// console.log(typeof name, typeof roll, typeof isTrue);


/******
 * Paractice Problems
 * *********/  
//  1.
function feetToInch (feet) {
    const inch = feet * 12;
    return inch;
}

const totalInch = feetToInch(5);
// console.log(totalInch);

//  2.

function centimeterToMeter (centimeter) {
    const meter = centimeter / 100;
    return meter;
}

const totalMeter = centimeterToMeter(500);
// console.log(totalMeter);

// 3.

function paperRequirements(firstBook, secondBook, thirdBook) {

    const firstBookPages = firstBook * 100;
    const secondBookPages = secondBook * 200;
    const thirdBookPages = thirdBook * 300;
  
    const totalPages = firstBookPages + secondBookPages + thirdBookPages;
  
    return totalPages;
  }

  const totalPages = paperRequirements (2,4,7);
//   console.log(totalPages);

//   4.

function bestFriend (friends) {
   let longestName = '';
    
    for (let i = 0; i < friends.length; i++) {
      if (friends[i].length > longestName.length) {
        longestName = friends[i];
      }
    }
    
    return longestName;
  }

  const longestName = bestFriend(['Tamim', 'Rafi', 'Shoikot', 'Akash']);
//   console.log(longestName);

//   5.

function collectPositiveNumbers(numbers) {
    const positiveNumbers = [];
  
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] >= 0) {
        positiveNumbers.push(numbers[i]);
      } else {
        break;
      }
    }
  
    return positiveNumbers;
  }

  const positiveNumbers = collectPositiveNumbers([1, 3, 5, -2, 4, 6]);
  console.log(positiveNumbers);