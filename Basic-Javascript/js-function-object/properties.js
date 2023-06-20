var shoppingCart = {
    books: 3,
    Pen: 7,
    sunglass: 1,
    mouse: 2,
    keyboard: 1,
}

// When you know the specific peoperty name, use dot to get the property value
var penCount = shoppingCart.Pen;

// Alternative System

// 1

var penCount2 = shoppingCart['pen'];

// 2

var properties = Object.keys(shoppingCart);
var propertyValue = Object.values(shoppingCart);
console.log(properties);
console.log(propertyValue);
console.log(shoppingCart);

// 3

var propertyName = 'mouse'
var propertyValue = shoppingCart[propertyName];
console.log(propertyName, propertyValue)


// Set property values

// 1

shoppingCart.mouse = 15;

// 2

shoppingCart['mouse'] = 19;

console.log(shoppingCart);

// 3
var propertyName = 'mouse'
shoppingCart[propertyName] = 89;
console.log(shoppingCart);