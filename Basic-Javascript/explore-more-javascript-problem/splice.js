const friends = [34, 21, 45, 88, 76, 45, 11, 15];

const partial = friends.splice(2, 5, 1, 2, 3);
console.log(partial);
console.log(friends);