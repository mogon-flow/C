// // Part 1: Access to the relevant HTML elements
var target = document.getElementById('theme');
var log = document.getElementById('log');
var submit = document.getElementsByName('submit')[0];
var alertSpinner = document.getElementById('alertSpinner');

var shapeBTN = document.getElementsByName('shape');
var colorBTN = document.getElementsByName('color');
var lineTotal = document.getElementsByName('lineTotal')[0];

var shape, color;//store user selections
var lineCount = 0;//reset total of lines
var intervalID; // Timer ID
// Part 2: Functions
var printShape = function (shape, color) {
// Print a shape by adding div with shape and color as class names
    var classname = shape + ' ' + color;
    var newshape = "<div class=\'" + classname + "\'></div>";
    var newline = '<p class=\'clear\'></p>';
    for (var row = 1; row <= lineCount; row++) {
        for (var column = 1; column <= row; column++) {
            window.clearInterval(intervalID);
            intervalID = window.setInterval(function () {
                alert('running callback after the first interval..');
                window.clearInterval(intervalID);
            }, 300);
            target.insertAdjacentHTML('beforeend', newshape);//Make a new column
        }
        target.insertAdjacentHTML('beforeend', newline);//Make a new row
    }
};
var validateSpinner = function () {//Function: Handle spinner
    lineCount = parseInt(lineTotal.value);
    if (Number.isNaN(lineCount) || lineCount > 10 || lineCount < 1)
    {
        alertSpinner.style.display = 'block';
        lineTotal.value = "";
        return false;
    } else {
        alertSpinner.style.display = 'none';
        return true;
    }
};
var getSelectedButtonValue = function (btnGroup) {//Function: Reade button selection
    var i = 0;
    while (i < btnGroup.length && !btnGroup[i].checked) {
        i++;
    }
    return btnGroup[i].value;
};

function action() {// Function: a callback for the submit button
    // Only print when numShape is between 1 and 10
    if (validateSpinner() === true) {
        shape = getSelectedButtonValue(shapeBTN);//Read shape
        color = getSelectedButtonValue(colorBTN);//Read color
        //Log 
        msg = '<p class=\'log\'>Request for ' + lineCount + ' line(s). Printing...</p>';
        log.insertAdjacentHTML('afterbegin', msg);
        printShape(shape, color);// Print pattern
    }// End of if
}// End of action

//Part 3: Add Event Listeners
// Register input event listener on the spinner 'LineTotal'
lineTotal.addEventListener('input', validateSpinner);

// Make a function call to register click listener on submit button
submit.addEventListener('click', action);

