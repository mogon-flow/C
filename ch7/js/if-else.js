// Get a reference to the element with the id value square
var squareHandler = document.getElementById('square');
// IF-ELSE 
if (squareHandler) {// If there is a square, do this block
    squareHandler.textContent = "SQUARE";
    window.alert("There is a square.");
}
else {// If no square, do this block
    window.alert("There is NO square. Add one now..");
    // Get a reference to the section with id value 'shapes'
    var ref = document.getElementById('shapes');
    // Write HTML code for inserting a div element
    var square = "<div id='square'></div>";
    // Append the HTML code to the section 'shapes'
    ref.innerHTML += square;
}

// Get a reference to the element with the id value triangle
var triangleHandler = document.getElementById('triangle');
// IF-ELSE
if (triangleHandler) {// If there is a triangle, do this block
    triangleHandler.textContent = "triangle";
    window.alert("There is a triangle.");
}
else {// If no triangle, do this block
    window.alert("There is NO triangle. Add one now..");
    var ref = document.getElementById('shapes');
    var triangle = "<div id='triangle'></div>";
    ref.innerHTML += triangle; 
}