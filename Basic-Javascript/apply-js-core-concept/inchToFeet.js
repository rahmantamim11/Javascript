// const myInches = 12;
// const myFeet = myInches / 12;
// console.log(myFeet);

// function inchToFeet (inches) {

//     const feet = inches / 12;
//     return feet;

// }

// const dadaInches = 144;
// const dadaFeet = inchToFeet (dadaInches);
// console.log('Dada Feet', dadaFeet);

function inchToFeet (inches) {
    const feet = inches / 12;
    return feet;
}

const playersInches = 84;
const playersFeet = inchToFeet(playersInches);
console.log("players feet", playersFeet);