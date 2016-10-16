// Search HTML elements with the tag 'li'
var items = document.getElementsByTagName('li');
// Prompt the user for an integer between 1 and 3
var input = window.prompt('There are 3 boxes on the page. To open a box, enter a number (1, 2, 3): ');
// Repeat prompting until the user enters a valid value 
while ( Number.isNaN(parseInt(input)) || (parseInt(input) > 3 || parseInt(input) < 1) ) 
{
  input = window.prompt('Invalid input. You must enter a number (1, 2, 3). Try again: ');
}
// Locate the selected li element and apply a class selector  
var select = parseInt(input) - 1;
items[select].innerHTML = 'Open...';
// Use String.concat to join 'b' and the integer in select
var name = 'b'.concat(select);
// Set the class attribute to the value in name: b0 or b1 or b2
items[select].setAttribute('class', name);