var stars = ["Alpha", "Beta", "Gamma", "Delta", "Epsilon", "Theta", "Chi", "Zeta", "Mu", "Eta"];
var lines = [];

stars.forEach(makeLine);

var place = document.getElementById("stars");
place.innerHTML = lines[0] + lines[1] + lines[2] + lines[3] + lines[4] + lines[5] + lines[6] + lines[7] + lines[8] + lines[9];

function makeLine(element, index) {
    lines[index] = "<p>*The star indexed by " + index + " is " + element + ".</p>";
}