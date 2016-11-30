// Access to the relevant HTML elements
var target = document.getElementById('theme');
var log = document.getElementById('log');
var alertSpinner = document.getElementById('alertSpinner');

var submit = document.getElementsByName('submit')[0];
var shapeBTN = document.getElementsByName('shape');
var colorBTN = document.getElementsByName('color');
var shapeTotal = document.getElementsByName('shapeTotal')[0];

var numShape = 0;//reset total of shapes

var printShape = function (shape, color) {
// Print a shape by adding div with shape and color as class names
    classname = shape + ' ' + color;
    newshape = "<div class=\'" + classname + "\'></div>";
    for (var i = 1; i <= numShape; i++) {
        target.insertAdjacentHTML('beforeend', newshape);
    }
};

var validateLines = function () {
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

function action() {// Define a callback
    // Only print when numShape is between 1 and 10
    //validateLines();
    if (validateLines()===true) {
        //Read shape
        var i = 0;
        while (i < shapeBTN.length && !shapeBTN[i].checked) {
            i++;
        }
        shape = shapeBTN[i].value;
        //Read color
        i = 0;
        while (i < colorBTN.length && !colorBTN[i].checked) {
            i++;
        }
        color = colorBTN[i].value;
        //Log 
        msg = '<p class=\'log\'>Request for ' + numShape + ' shape(s). Printing...</p>';
        log.insertAdjacentHTML('afterbegin', msg);
        // Print pattern
        printShape(shape, color);
    }// End of if
}// End of action

// Register input event listener on the spinner 'shapeTotal'
shapeTotal.addEventListener('input', validateLines);

// Register click event listener on submit button
submit.addEventListener('click', action);


