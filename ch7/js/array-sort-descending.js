var numbers = [
  20,
  - 2,
  100,
  35
];
// Declare a comparing function for descending order
function compare(a, b) {
  if (a > b) {
    return - 1;
  }
  if (a < b) {
    return 1;
  }
  if (a === b) {
    return 0;
  }
}// Call Array.sort with passing compare as callback

numbers.sort(compare);
// Log the sorted array
console.log(numbers);
