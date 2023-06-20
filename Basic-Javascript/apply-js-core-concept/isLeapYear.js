function isLeapYear(year) {
    const remainder = year % 4;
    if (remainder === 0) {
        console.log('Your Year is a Leap Year', year);
    }
    else {
        console.log('Your Year is Not a Leap Year', year);
    }
}

isLeapYear(1933);
isLeapYear(1952);
isLeapYear(2015);
isLeapYear(2023);
isLeapYear(2024);
isLeapYear(2025);
isLeapYear(2026);
isLeapYear(2027);
isLeapYear(2028);
isLeapYear(2029);

// function isLeapYear (year){
//     const remainder = year % 4;
//     if (remainder === 0){
//         return true
//     }
//     else {
//         return false
//     }
// }

// const myLeapYear = isLeapYear(1952);
// console.log('My Leap Year', myLeapYear)
// const herLeapYear = isLeapYear(2023);
// console.log('her Leap Year', herLeapYear)
