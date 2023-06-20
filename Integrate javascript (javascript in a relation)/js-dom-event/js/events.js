console.log('This is JS Separate File');

// Directly set on HTML option - 1
//  <button onclick="console.log(7);">Click Me</button>
//  <button onclick="console.log(99);">Another Button</button>
// <button onclick="document.body.style.backgroundColor='yellow'">Make Yellow</button>

// add onclick function Option 2 [second important for use]

function makeRed () {
    document.body.style.backgroundColor = 'red';
}

// add onclick function Option 3

const makeBlueButton = document.getElementById('make-blue')
makeBlueButton.onclick = makeBlue

function makeBlue () {
    document.body.style.backgroundColor = 'blue';
}

// add onclick function Option 4 [We will use this sometimes]

const makePurple = document.getElementById('make-purple')
makePurple.onclick = function makePurple () {
    document.body.style.backgroundColor = 'purple';
}

// Option 5 

const pinkButton = document.getElementById('make-pink');
pinkButton.addEventListener ('click', makePink);

function makePink () {
    document.body.style.backgroundColor = 'pink';
}

// Option 6

const greenButton = document.getElementById('make-green');
greenButton.addEventListener ('click', function makeGreen () {
    document.body.style.backgroundColor = 'green';
})

// Option 7 (Final) = [we will use this]

document.getElementById('make-goldenrod').addEventListener('click', function(){
    document.body.style.backgroundColor = 'goldenrod';
  })
      



