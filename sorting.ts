let scores: number[] = [55, 23, 87, 12, 99, 38];
const ascending = [...scores].sort((a, b) => a - b);
const descending = [...scores].sort((a, b) => b - a);
console.log("Ascending order:", ascending);  
console.log("Descending order:", descending);  