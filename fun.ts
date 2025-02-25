function areAllNumbersPositive(numbers: number[]): boolean {
    return numbers.every(num => num > 0);
  }
  let nu = [1, 2, 3, 4, 5];
  console.log(areAllNumbersPositive(nu)); 
  let mixedNu = [1, -2, 3, 4, 5];
  console.log(areAllNumbersPositive(mixedNu)); 