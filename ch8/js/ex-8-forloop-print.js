var stars = ["Alpha", "Beta", "Gamma", "Delta", "Epsilon", "Theta", "Chi", "Zeta", "Mu", "Eta"];
// Get a reference to the element 'stars'
var place = document.getElementById("stars");

// Declare newline and initialize it to an empty string
var newline = '';
// for loop
for (var index = 0; index < stars.length; index++) {
    console.log("==== Start Iteration #" + (index+1) + " -> loop counter: index = " + index);
    console.log("   stars[index] = " + stars[index]);
    newline += "<p>The star indexed by " + index + " is " + stars[index] + ".</p>";
}
// Write newline as the HTML content into the element 'stars'
place.innerHTML = newline;