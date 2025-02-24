var numbers = [10, 20, 30, 40, 50, 60];
var doubled = numbers.map(function (num) { return num * 2; });
var filtered = doubled.filter(function (num) { return num <= 50; });
var sum = numbers.reduce(function (acc, num) { return acc + num; }, 0);
console.log("Doubled numbers:", doubled);
console.log("Filtered numbers:", filtered);
console.log("Sum:", sum);
