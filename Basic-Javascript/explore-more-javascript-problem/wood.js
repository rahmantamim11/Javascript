/****
 * Fixed per item wood requirements
 * 1. Chair --> 3cft
 * 2. Table --> 10 cft
 * 3. Bed --> 50cft
 
 * Vary: Quantity 
 * ****/  

function woodCalculator (chairQuantity, tableQuantity, bedQuantity) {
const perChairWood = 3;
const perTableWood = 10;
const perBedWood = 50;

const chairWood = chairQuantity * perChairWood;
const tableWood = tableQuantity * perTableWood;
const bedWood = bedQuantity * perBedWood;

const totalWood = chairWood + tableWood + bedWood;
return totalWood;

// console.log(chairQuantity , tableQuantity , bedQuantity);

}

const totalWood = woodCalculator ( 2, 2 , 5);
console.log('total wood required', totalWood);