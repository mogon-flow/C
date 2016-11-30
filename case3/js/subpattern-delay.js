// Part 1: Access to the relevant HTML elements
var target = document.getElementById('theme');
var log = document.getElementById('log');
var submit = document.getElementsByName('submit')[0];
var alertSpinner = document.getElementById('alertSpinner');

var shapeBTN = document.getElementsByName('shape');
var colorBTN = document.getElementsByName('color');
var lineTotal = document.getElementsByName('lineTotal')[0];

var shape, color;// User selections
var lineCount = 0;// The total rows to be requested
var rowCounter = 0; // row counter: #lines 
var columnCounter = 0; // column counter: #shapes in a line

var intervalID; // Timer ID

// Part 2: Functions
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

function action() {//Function: a callback for submit button
    if (validateSpinner() === true && typeof intervalID==="undefined") {
        shape = getSelectedButtonValue(shapeBTN);//Read shape
        color = getSelectedButtonValue(colorBTN);//Read color
        //Log 
        msg = '<p class=\'log\'>Request for ' + lineCount + ' line(s). Printing...</p>';
        log.insertAdjacentHTML('afterbegin', msg);
        // Clear and Start timer
        window.clearInterval(intervalID);
        intervalID = window.setInterval(printShape, 300, shape, color);
    }
}// End of action

var stopPrint = function () {// Clear Timer once all rows are complete.
    if (rowCounter === lineCount && columnCounter === rowCounter) {
        window.clearInterval(intervalID);
    }
};
var makeLine = function () {// Print a new paragraph representing a new row
    if (columnCounter === rowCounter) {// The current row is complete?
        columnCounter = 0; // Reset the column counter
        target.insertAdjacentHTML('beforeend', '<p class=\'clear\'></p>');//Create a new row
        rowCounter++; // Increment rowCounter
    }
};
var printShape = function (shape, color) {//Function: Print a shape
    classname = shape + ' ' + color;
    makeLine(); //Decide to print a new line or not
    htmlsource = "<div class=\'" + classname + "\'></div>";
    target.insertAdjacentHTML('beforeend', htmlsource);
    columnCounter++;
    stopPrint(); //Decide to stop timer or not
};

//Part 3: Add Event Listeners
// Register input event listener on the spinner 'LineTotal'
lineTotal.addEventListener('input', validateSpinner);

// Make a function call to register click listener on submit button
submit.addEventListener('click', action);