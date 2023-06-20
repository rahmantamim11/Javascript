function milesToKm (miles) {
    const km = miles*1.609;
    return km;
}

const km = 2;
const miles = milesToKm(km);
console.log('Km', miles);