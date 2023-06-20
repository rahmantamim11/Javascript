var numbers = [45, 56, 34, 76, 88, 99, 102, 22, 45, 65, 78, 65, 33, 32];

for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    if (number > 50){
        continue;
    }
    console.log(number);
}