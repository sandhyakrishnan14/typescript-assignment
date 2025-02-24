var arr1 = [1, 2, 3, 4];
var arr2 = [3, 4, 5, 6];
var mergedArray = arr1.concat(arr2);
var uniqueArrayFiltered = mergedArray.filter(function (item, index) { return mergedArray.indexOf(item) === index; });
console.log(uniqueArrayFiltered);
