var message = "<p>Add me to the div grandfather</p>";
var grandfatherHandle = document.getElementById("grandfather");
var fatherHandle = document.getElementById("father");
var sonHandle = document.getElementById("son");
var currentHTML = grandfatherHandle.innerHTML;
grandfatherHandle.innerHTML = message + currentHTML;