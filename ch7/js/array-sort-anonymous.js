var numbers = [20, -2, 100, 35];
// Call Array.sort with an anonymous callback
numbers.sort(function (a, b) {
    if (a > b) {
        return 1;
    }
    if (a < b) {
        return -1;
    }
    if (a === b) {
        return 0;
    }
});
console.log(numbers); // Log the sorted array
