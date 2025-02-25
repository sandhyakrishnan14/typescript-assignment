let arr5: (boolean | string | number)[] = [true, false];
let arr6: (boolean | string | number)[] = ["Yes", "No"];
let arr3: (boolean | string | number)[] = arr5.concat(arr6, [1, 2, 3]);
console.log(arr3);