// =====================================
// Part 2: Sort cities by the key cityName in ascending order
// ===================================== 
 cities.sort(function (a, b){
    var cityA = a.cityName.toLowerCase();
    var cityB = b.cityName.toLowerCase();
    if (cityA < cityB) {return -1;}
    if (cityA > cityB) {return 1;}
    if (cityA = cityB) {return 0;}
 });
 
// =====================================
// Part 3: Display instances on the page
// ===================================== 
// Get a reference to the element 'list'
var list = document.getElementById('list');
// Within the list, add a li element for each city
cities.forEach(function(element, index){
    list.insertAdjacentHTML('beforeend', element.source);
});

// ====================================================
// Part 4: Implement interactions between user and page
// ====================================================
// Get references to elements to be updated
var mark = document.getElementById('mark');
var photo = document.getElementById('photo');
var items = document.getElementsByTagName('li');
var cityName = document.getElementById('cityName');
var description = document.getElementById('description');

// Register a listener on item for click event to update relevant content
function showPhoto(item, city){
    function action(){
        mark.textContent = city.cityName;
        photo.style.backgroundImage = 'url(\'img/' + city.avatar + '\')';
        cityName.textContent = city.cityName;
        description.textContent = city.description;
    }
    item.addEventListener('click', action);
}
// call showPhoto to register a listener for each li element
for (var index = 0; index < items.length; index++) {
    new showPhoto(items[index], cities[index]);
}