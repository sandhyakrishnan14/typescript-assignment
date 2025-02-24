let arr1: number[] = [1, 2, 3, 4];
let arr2: number[] = [3, 4, 5, 6];
let mergedArray = arr1.concat(arr2);
let uniqueArrayFiltered = mergedArray.filter((item, index) => mergedArray.indexOf(item) === index);
console.log(uniqueArrayFiltered);  