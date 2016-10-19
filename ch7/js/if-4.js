// Get a reference to the first element with the id value 'square'
var squareHandler = document.getElementById('square');

if (squareHandler) {// If the reference is not null
    squareHandler.textContent = "SQUARE";
    window.alert("There is a square.");
}
// Get a reference to the first element with the id value 'triangle'
var triangleHandler = document.getElementById('triangle');

if (triangleHandler) {// If the refence is not null
    triangleHandler.textContent = "TRIANGLE";
    window.alert("There is a triangle.");
}