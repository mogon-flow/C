function reminder() {
    window.alert("Clock out!");
}
function calcArea(width, height) {
    var area = width * height;
    return area;
}
reminder();
var area = calcArea(3, 4);
console.log("The area of a rectangle 3 by 4 is " + area + ".");
area = calcArea(10, 15);
console.log("The area of a rectangle 10 by 15 is " + area + ".");