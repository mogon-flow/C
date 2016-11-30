/*The script generates a random integer between 1 and 50 inclusive, then gives a user up to 6 tries to guess the number. A correct guess immediately halts the script with a success message. Each incorrect guess is followed a pop up informing the user whether the guess was too small or too big
 */
//Window Prompt function: result = window.prompt(message, default);
//result is a string containing the text entered by the user, or null.
// 
// Generate a random integer in [1,50]
var number = Math.floor(Math.random() * 50) + 1;
// Make a for statement for at most 6 iterations
for (var i = 1; i <= 6; i++)
{
    //Prompt user for an integer
    var guess = parseInt(window.prompt('Enter guess #' + i + ' integer [1. . 50]'));
    if (guess !== number)
    {
        if (guess > number) {
            alert('Too big');
        } else {
            alert('Too small');
        }
    } else {
        alert('Got it!');
        break;
    }
}

