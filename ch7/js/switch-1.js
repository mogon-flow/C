var shapes = document.getElementsByClassName('shape');

var select = window.prompt("To select a shape, enter an integer [1,4]:\n");

switch (select) {
    case '1':
        shapes[0].textContent = "selected";
        break;
    case '2':
        shapes[1].textContent = "selected";
        break;
    case '3':
        shapes[2].textContent = "selected";
        break;
    case '4':
        shapes[3].textContent = "selected";
        break;
    default:
        window.alert("You did not select any one.");
}