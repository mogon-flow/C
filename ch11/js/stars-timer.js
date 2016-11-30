var stars = ["Alpha", "Beta", "Gamma", "Delta", "Epsilon", "Theta", "Chi", "Zeta", "Mu", "Eta"];
var place = document.getElementById("stars");// Get a reference to the element 'stars'
var newline = '';// Declare newline and initialize it to an empty string
var index = 0;// Declare an array index for stars

// Set up a new timer intervalID to run printStar every 500 milliseconds
var intervalID = window.setInterval(printStar, 500);

function printStar() {// Declare printStar
    newline = "<p>The star indexed by " + index + " is " + stars[index] + ".</p>";
    // Write newline into the element 'stars'
    place.insertAdjacentHTML('beforeend', newline);
    index++;
    stopPrint(); // Determine whether to stop the timer or not    
}
function stopPrint() {// Declare stopPrint
    if (index === stars.length) {
        window.clearInterval(intervalID);
    }
}