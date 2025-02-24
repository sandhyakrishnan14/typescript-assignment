let values: number[] = [10, 20, 30, 40, 50];
const result = values.filter(num => num > 25)[0];
const index = values.indexOf(40);
console.log("First number > 25:", result);  
console.log("Index of 40:", index);  