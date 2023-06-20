var shoppingCart = {
    books: 3,
    Pen: 7,
    sunglass: 1,
    mouse: 2,
    keyboard: 1,
}

const keys = Object.keys(shoppingCart);
console.log(keys);

const values = Object.values(shoppingCart);
console.log(values);

// Hard systems

for (var i = 0; i < keys.length; i++){
    var propertyName = keys[i];
    var properyValue = shoppingCart[propertyName];
    console.log(propertyName, properyValue)
}

// Easy Method 

for (var propertyName in shoppingCart){
    const value = shoppingCart[propertyName];
    console.log(propertyName, value);
}