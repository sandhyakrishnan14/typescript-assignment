var values = [10, 20, 30, 40, 50];
// Find the first number greater than 25
var result = values.filter(function (num) { return num > 25; })[0];
// Get the index of the number 40
var index = values.indexOf(40);
console.log("First number > 25:", result); // 30
console.log("Index of 40:", index); // 3
