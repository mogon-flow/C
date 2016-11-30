// Get the reference to the 1st body element
var target = document.getElementsByTagName('body') [0];
// Erase the current content on the page.
target.innerHTML ='';
// Prepare html
var newline = '<br />';

// Set up loop counter upper limits
var outerMax = 9; // Set outer loop counter upper limet
var innerMax = 9; // Set inner loop Counter upper limit

// Nesting loops
for (var row = 1; row <= outerMax; row++) {//Outer loop
    //Make a new line
    target.insertAdjacentHTML('beforeend', newline);
    //Inner loop
    for (var column = 1; column <= innerMax; column++) {
        target.insertAdjacentHTML('beforeend', column);
    }
}