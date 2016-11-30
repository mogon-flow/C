// Generate a random integer in [1,50]
var number = Math.floor(Math.random() * 50) + 1;
// Iterate at most 6 times
for (var i = 1; i <= 6; i++) {

    // Prompt the user for an integer
    var guess = parseInt(window.prompt('Enter guess #' + i + ' (1. . 50)'));
    // Make decisions by using conditional operator 
    var result = (guess !== number) ? ((guess > number) ? 'Too big' : 'Too small') : 'Got it!';
    // Display the result to the suer
    alert(result);
    // If guess is right, break out of this loop
    if (result === 'Got it!') {
        break;
    }

} //END for

