var stars = ["Alpha", "Beta", "Gamma", "Delta", "Epsilon", "Theta", "Chi", "Zeta", "Mu", "Eta"];
var lines = [];

var place = document.getElementById("stars");

var index = 0;
lines[index] = makeLine(index);
index = index + 1;
lines[index] = makeLine(index);
index = index + 1;
lines[index] = makeLine(index);
index = index + 1;
lines[index] = makeLine(index);
index = index + 1;
lines[index] = makeLine(index);
index = index + 1;
lines[index] = makeLine(index);
index = index + 1;
lines[index] = makeLine(index);
index = index + 1;
lines[index] = makeLine(index);
index = index + 1;
lines[index] = makeLine(index);
index = index + 1;
lines[index] = makeLine(index);

place.innerHTML = lines[0] + lines[1] + lines[2] + lines[3] + lines[4] + lines[5] + lines[6] + lines[7] + lines[8] + lines[9];


function makeLine(index) {
var index = index;
    var line = "<p>The star indexed by " + index + " is " + stars[index] + ".</p>";
    return line;
}