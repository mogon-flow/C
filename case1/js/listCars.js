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
// Get a reference collection of all elements with tag 'input'
var inputs = document.getElementsByTagName('input');
// Get a referecne collection of all elements with class name 'speed'
var speeds = document.getElementsByClassName('speed');

function btnAccelerate() { // action for accelerating cars[0]
    var mph = parseInt(window.prompt('Enter an integer for acceleration rate:'));
    if (mph) {// if mph is valid and true, increase speed
        cars[0].accelerate(mph);
    }
    speeds[0].innerHTML = cars[0].currentSpeed + '<span class=\'mph\'>mph</span>';
}
function btnBrake() { // action for stopping cars[0]
    if (window.confirm("Stop?")) { // if user presses OK button in the confirmation window
        cars[0].brake();
    }
    speeds[0].innerHTML = cars[0].currentSpeed + '<span class=\'mph\'>mph</span>';
}

// Define a click event for the 1st input element with the callback btnAccelerate
inputs[0].addEventListener('click', btnAccelerate);
// Define a click event for the 2nd input element with the callback btnBrake
inputs[1].addEventListener('click', btnBrake);