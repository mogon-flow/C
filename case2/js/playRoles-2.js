// +++++++++++++++++++++++++++++++++
// Part 1: Declare Global variables
// +++++++++++++++++++++++++++++++++
var bottom; // Height of game area
var right; // Width of game area    
var xini; // Initial left position
// Declare an array for role names
var roleNames = [];
// Declare an array for role avatar images
var roleAvatars = [];
// Declare an array for speed
var speed = [];
// Declare an array for role instances
var roles = [];
// Declare an array, prex, to store the left position of each role
// which is the horizontal distance to the left wall. 
var prex = [];
// Declare an array, prey, to store the top position of each role
// which is the vertical distance to the top wall
var prey = [];
// Get a reference to div scene
var scene = document.getElementById('scene');
// Declare an array for time intervals
var interval = [];
// Declare an array for timer IDs
var intervalID = [];

// +++++++++++++++++++++++++++++++++
// Part 2: Implement a specific case
// +++++++++++++++++++++++++++++++++
// Give names
roleNames = ['dog', 'cat'];
// Give resource files for avatar 
roleAvatars = ['img/dogface.png', 'img/cat.png'];
// Assign each role with a speed
speed = [5, 3];

// Set size of scene: bottom,right,xini
setArea(630, 220, 120);
// Set the initial left and top for role[0]
prex[0] = xini;
prey[0] = bottom; // bottom
// Set the initial left and top for role[1] 
prex[1] = Math.random() * xini;  // a random horizontal distance between 0(inclusive) and xini(exclusive)
prey[1] = 0; // top
// Call functions
insertHTMLelements();
createRoles();
placeRoles();


//Create a time event for the dog. 
//After every 6 seconds, send a direction command to the dog and the dog moves one step to that direction.
interval[0] = 6000;
intervalID[0] = startTimeEvent(moveRole, interval[0], 0);

//Create a time event for the cat. 
//After every 20 milliseconds, the cat falls one step down. 
interval[1] = 20;
intervalID[1] = startTimeEvent(fall, interval[1], 1);


// ++++++++++++++++++++++++++++++
// Part 3: Function Declarations
// ++++++++++++++++++++++++++++++
// setScene(650,220,120)
function setArea(vbottom, vright, vxini) {
    bottom = vbottom; // Height of game area
    right = vright; // Width of game area    
    xini = vxini; // Initial left position
}

function insertHTMLelements() {// Display roles at scene
    var content = '<div id=\'roles\'>';
    // Append every role to HTML content
    roleNames.forEach(function (element, index) {
        // Compose the HTML string that creates a div element for a role name.
        content = content + '<div class=\'role\' id=\'' + element + '\'></div>';
    });
    // Update the HTML source within the scene
    scene.innerHTML = content + '</div>';
}

function createRoles() {// Create a role instance for each name in roleNames
    roleNames.forEach(function (element, index) {
        roles[index] = new Role(document.getElementById(element), roleAvatars[index], 0, 0, 'hidden', speed[index]);
    });
}

function placeRoles() {// Place each role in the scene
    roles.forEach(function (element, index) {
        element.setup();
        element.setPosition(prex[index], prey[index]);
        element.setVisibility('visible');
    });
}

function moveRole(index) {// Command a role to move around
    var direction = null;
    var input = window.prompt("Command " + roleNames[index].toUpperCase() + ": \n Four standard commands denoted by 0, 1, 2 and 3: \n 0. Run up \n 1. Run right \n 2. Run down \n 3. Run left. \n Enter an integer [0,3] for the command: ");
    direction = parseInt(input);
    roles[index].move(direction);
}

function fall(index) {// The role, referenced by roles[index], jump one step down.
    roles[index].fall(bottom, right);
}

function startTimeEvent(task, interval, roleIndex) {// Create an interval timer for a role to repeat a task forever    
    var intervalID;
    window.clearInterval(intervalID);
    intervalID = window.setInterval(task, interval, roleIndex);
    return intervalID;
}
