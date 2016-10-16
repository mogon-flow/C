var stars = ["Alpha", "Beta", "Gamma", "Delta", "Epsilon", "Theta", "Chi", "Zeta", "Mu", "Eta"];

var place = document.getElementById("stars");

var index = 0;
var line0 = makeLine(index);
index = index + 1;
var line1 = makeLine(index);
index = index + 1;
var line2 = makeLine(index);
index = index + 1;
var line3 = makeLine(index);
index = index + 1;
var line4 = makeLine(index);
index = index + 1;
var line5 = makeLine(index);
index = index + 1;
var line6 = makeLine(index);
index = index + 1;
var line7 = makeLine(index);
index = index + 1;
var line8 = makeLine(index);
index = index + 1;
var line9 = makeLine(index);

place.innerHTML = line0 + line1 + line2 + line3 + line4 + line5 + line6 + line7 + line8 + line9;


function makeLine(index) {
var index = index;
    var line = "<p>The star indexed by " + index + " is " + stars[index] + ".</p>";
    return line;
}