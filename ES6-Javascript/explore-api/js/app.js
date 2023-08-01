function loadData2(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => res.json())
    .then(data => console.log(data));
}

function loadUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayUsers(data))
}

function displayUsers(data){
    console.log(data);
}


function loadUsers5() {
    fetch ('https://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then (data => console.log(data))
}

