// Problem - 1

function  mindGame (number) {
    let result = ( ( number * 3 ) +10) / 2 - 5;
    return result;
}

// Problem - 2

function evenOdd(str) {
    let length = str.length;
    if (length % 2 === 0) {
      return 'even';
    } else {
      return 'odd';
    }
  }

// Problem - 3

function isLGSeven(number) {
    const difference = number - 7;
  
    if (difference < 7) {
      return difference;
    } else {
      return number * 2;
    }
  }


// Problem - 4

function findingBadData(data) {
    let badDataCount = 0;
  
    for (let i = 0; i < data.length; i++) {
      if (data[i] < 0) {
        badDataCount++;
      }
    }
  
    return badDataCount;
  }

// Problem - 5

function gemsToDiamond(gems1, gems2, gems3) {
    const power1 = 21;
    const power2 = 32;
    const power3 = 43;
  
    const totalDiamonds = (gems1 * power1) + (gems2 * power2) + (gems3 * power3);
  
    if (totalDiamonds > 1000) {
      return totalDiamonds - 2000;
    } else {
      return totalDiamonds;
    }
  }

