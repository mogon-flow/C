// +++++++++++++++++++++++++++++++++++++++
// Part 1: Declare variables
// +++++++++++++++++++++++++++++++++++++++
var begin = '';
var avatar = '';
var specifics = '';
var make = '';
var model = '';
var year = '';
var color = '';
var safety = '';
var speedpanel = '';
var speed = '';
var controls = '';
var end = '';
// Declare an array; each item stores the HTML source that displays a car on the web page.
var objectHTML = [];

// +++++++++++++++++++++++++++++++++++++++
// Part 2: Compose HTML source
// +++++++++++++++++++++++++++++++++++++++
// Iterate over cars. Compose the HTML source that displays a car on the web page.
cars.forEach(function (element, index) {
    begin = '<section class=\'car\'>';
    avatar = '<img src=\'img/' + element.avatar + '\'>';
    specifics = '<section class=\'specifics\'>';
    make = '<div class=\'pair\'><div class=\'key\'>make:</div><div class=\'value\'>' + element.make + '</div></div>';
    model = '<div class=\'pair\'><div class=\'key\'>model:</div><div class=\'value\'>' + element.model + '</div></div>';
    year = '<div class=\'pair\'><div class=\'key\'>year:</div><div class=\'value\'>' + element.year + '</div></div>';
    color = '<div class=\'pair\'><div class=\'key\'>color:</div><div class=\'value\'>' + element.color + '</div></div>';
    safety = '<div class=\'pair\'><div class=\'key\'>safety:</div><div class=\'value\'>' + element.safety + '</div></section>';
    speedpanel = '<section class=\'speedpanel\'>Current Speed';
    speed = '<div class=\'speed\'>' + element.currentSpeed + '<span class=\'mph\'>mph</span></div> '
    controls = '<div class=\'controls\'><input type=\'button\' value=\'ACCELERATE\'><input class=\'red\' type=\'button\' value=\'BRAKE\'></div>';
    end = '</div></section></section>'
    objectHTML[index] = begin + avatar + specifics + make + model + year + color + safety + speedpanel + speed + controls + end;
});

// +++++++++++++++++++++++++++++++++++++++
// Part 3: Display each car on the page
// +++++++++++++++++++++++++++++++++++++++
// Get a reference to the element whose id value is list.
var listArea = document.getElementById('list');
// Read the current innerHTML value into content
var content = listArea.innerHTML;

// Loop over objectHTML to append each item to content
objectHTML.forEach(function (element, index) {
    content = content + element;
});

// Set the innerHTML value of listArea to content
listArea.innerHTML = content;

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Part 4: Attach click event with two input buttons of cars[0]
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
var inputs = document.getElementsByTagName('input');
var speeds = document.getElementsByClassName('speed');

// Declare a function for accelerate button
function ButtonAccelerate(btn, car, speed) {
    //var element = document.getElementsByTagName('input')[btnIndex];
    function action() {
        var mph = parseInt(window.prompt('Enter an integer for acceleration rate:'));
        if (mph) {
            car.accelerate(mph);
        }
        speed.innerHTML = car.currentSpeed + '<span class=\'mph\'>mph</span>';
    }
    btn.addEventListener('click', action);
}
// Declare a function for brake button
function ButtonBrake(btn, car, speed) {
    //var element = document.getElementsByTagName('input')[btnIndex];
    function action() {
        if (window.confirm("Stop?")) {
            car.brake();
        }
        speed.innerHTML = car.currentSpeed + '<span class=\'mph\'>mph</span>';
    }
    btn.addEventListener('click', action);
}

// Bind a click event with the 1st input button of each car
// button index: 0, 2, 4, 6
// car index: 0, 1, 2, 3
for (var index = 0; index < inputs.length; index = index + 2) {
    var carIndex = parseInt(index/2);
    new ButtonAccelerate(inputs[index], cars[carIndex], speeds[carIndex]);
}

// Bind a click event with the 2nd input button of each car
// button index; 1, 3, 5, 7
// car index: 0, 1, 2, 3
for (var index = 1; index < inputs.length; index = index + 2) {
    var carIndex = parseInt(index/2);
    new ButtonBrake(inputs[index], cars[carIndex], speeds[carIndex]);
}