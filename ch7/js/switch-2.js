// Get references to yellow elements
var yellows = document.getElementsByClassName('yellow');
// Alert the total of yellow elements
window.alert("There are " + yellows.length + " elements in yellow."); 
// Change the background of the 1st yellow element
yellows[0].style.backgroundImage ="url(\'img/ostrich.png\')";
yellows[0].style.backgroundColor = 'lightblue';
// Change the background of the 2nd yellow element
yellows[1].style.backgroundImage ="url(\'img/crocodile.png\')";
