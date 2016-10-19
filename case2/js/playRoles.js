// +++++++++++++++++++++++++++++++++
// Part 1: Declare global variables
// +++++++++++++++++++++++++++++++++
var bottom; // Height of game area
var right; // Width of game area    
var xini; // Initial left position
// Declare an array for role names
var roleNames = [];
// Declare an array for role avatar images
var roleAvatars = [];
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

// +++++++++++++++++++++++++++++++++
// Part 2: Implement a specific case
// +++++++++++++++++++++++++++++++++
// Give names
roleNames = ['dog', 'cat'];
// Give resource files for avatar 
roleAvatars = ['img/dogface.png', 'img/cat.png'];

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

// ++++++++++++++++++++++++++++++
// Part 3: Function declarations
// ++++++++++++++++++++++++++++++
// setScene(650,220,120)
function setArea(vbottom, vright, vxini) {
    bottom = vbottom; // Height of game area
    right = vright; // Width of game area    
    xini = vxini; // Initial left position
}

function insertHTMLelements() {
    // Read the current HTML content in scene
    var content = '<div id=\'roles\'>';
    // Compose the HTML string that creates a div element for each new animal.
    // Append them to content
    roleNames.forEach(function (element, index) {
        content = content + '<div class=\'role\' id=\'' + element + '\'></div>';
    });
    // Update scene 
    scene.innerHTML = content + '</div>';
}

function createRoles() {// Create a role instance for each name in roleNames
    roleNames.forEach(function (element, index) {
        roles[index] = new Role(document.getElementById(element), roleAvatars[index], 0, 0, 'hidden');
    });
}

function placeRoles() {// Place each role in the scene
    roles.forEach(function (element, index) {
        element.setup();
        element.setPosition(prex[index], prey[index]);
        element.setVisibility('visible');
    });
}