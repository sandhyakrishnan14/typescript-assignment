let numbers: number[] = [10, 20, 30, 40, 50, 60];
const doubled = numbers.map(num => num * 2);
const filtered = doubled.filter(num => num <= 50);
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log("Doubled numbers:", doubled);  
console.log("Filtered numbers:", filtered);  
console.log("Sum:", sum); 