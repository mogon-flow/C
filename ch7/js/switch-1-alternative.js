var shapes = document.getElementsByClassName('shape');

var select = parseInt(window.prompt("To select a shape, enter an integer [1,4]:\n"));

var index = select - 1;
if (!select || index < 0 || index >= shapes.length) {
     window.alert("You did not select any one.");
} else {
    shapes[index].textContent = "selected";
}

