var stars = [];
stars.push("Beta");
stars.push("Gamma");
stars.push("Delta");

var size = stars.length;

console.log("Now we have pushed " + stars.length + " items into stars.");

var position = stars.indexOf("Gamma");
console.log("Gamma is at the position " + position + ".");

stars.unshift("Alpha");
console.log("After this addition, stars[0] = " + stars[0]);

stars.shift();
stars.pop();
size = stars.length;
console.log("Now stars has " + size + " item(s).")
