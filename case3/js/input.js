// Part 1: Access to the relevant HTML elements
var target = document.getElementById('theme');
var log = document.getElementById('log');
var alertSpinner = document.getElementById('alertSpinner');

var submit = document.getElementsByName('submit')[0];
var shapeBTN = document.getElementsByName('shape');
var colorBTN = document.getElementsByName('color');
var shapeTotal = document.getElementsByName('shapeTotal')[0];

var shape, color;//store user selections
var numShape = 0;//reset total of shapes
//
//Part 2: Functions
var printShape = function (shape, color) {
// Print a shape by adding div with shape and color as class names
    var classname = shape + ' ' + color;
    var newshape = "<div class=\'" + classname + "\'>" + numShape + "</div>";
    target.insertAdjacentHTML('beforeend', newshape);
};
var validateSpinner = function () { //Handle spinner
    numShape = parseInt(shapeTotal.value);
    if (Number.isNaN(numShape) || numShape > 10 || numShape < 1)
    {
        alertSpinner.style.display = 'block';
        return false;
    } else {
        alertSpinner.style.display = 'none';
        return true;
    }
};
var getSelectedButtonValue = function (btnGroup){//Reade button selection
        var i = 0;
        while (i < btnGroup.length && !btnGroup[i].checked) {
            i++;
        }
        return btnGroup[i].value;
};

function action() {// Define a callback for the submit button
    // Only print when numShape is between 1 and 10
    if (validateSpinner() === true) {       
        shape = getSelectedButtonValue(shapeBTN);//Read shape
        color = getSelectedButtonValue(colorBTN);//Read color
        //Log 
        msg = '<p class=\'log\'>Request for ' + numShape + ' shape(s). Printing...</p>';
        log.insertAdjacentHTML('afterbegin', msg);        
        printShape(shape, color);// Print pattern
    }// End of if
}// End of action

//Part 3: Add Event Listeners
// Register input event listener on the spinner 'shapeTotal'
shapeTotal.addEventListener('input', validateSpinner);

// Register click event listener on submit button
submit.addEventListener('click', action);


