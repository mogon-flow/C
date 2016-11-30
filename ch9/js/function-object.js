// ======================================================
// Step 1: Declare an array for city names and sort names
// ====================================================== 
var cities = ['Rome', 'Prague', 'Heidelberg', 'Nanjing'];
var photos = ['rome.png', 'prague.png', 'heidelberg.png', 'nanjing.png'];
// ======================================================
// Step 2: Process data
// ====================================================== 
cities.sort();
photos.sort();
// ==========================================
// Step 3: Display each city as <li> element
// ========================================== 
// Get a reference to the element 'list'
var list = document.getElementById('list');
// Within the list, add a li element for each city
cities.forEach(function (element, index) {
    var htmlsource = '<li>' + element + '</li>';
    list.insertAdjacentHTML('beforeend', htmlsource);
});
// ====================================================
// Step 4: Interaction: Register a click event for each <li>
// ====================================================
// Get a refercne collection of all <li> elements 
var items = document.getElementsByTagName('li');
// Get references to HTML elements to be updated once user clicks <li> element
var photo = document.getElementById('photo');

// Iterate over items to to instantiate a new showPhoto object 
for (var index = 0; index < items.length; index++) {
    new showPhoto(items[index], photos[index]);
}
// Declare a function showPhoto with two parameters item and imgsource. 
// The function registers a click listener on the 1st parameter item. 
// Once a click occurs with item, the listener will update background image by the image name in the 2nd parameter imgsource.
function showPhoto(item, imgsource){
    var action = function () {
        photo.style.backgroundImage = 'url(\'img/' + imgsource + '\')';
    };
    item.addEventListener('click', action);
}



