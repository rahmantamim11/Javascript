const container = document.getElementById('container');

const div = document.createElement('div');

const h2 = document.createElement('h2');

h2.innerText = 'My Full name is Rahman Tamim';

div.appendChild(h2);
container.appendChild(div);

console.log(container);