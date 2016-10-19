// Example 7.2
var pass = 60;
var input = window.prompt("Enter your score [0-100]: ");
var score = parseFloat(input);
var hasPassed = (score >= pass); 
var place = document.getElementById('answer');
place.textContent = "Level Passed: " + hasPassed;