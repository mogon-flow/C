var frameID, intervalID;
var interval = 300; frame = 12300;
var count = 0;
var species = ['camel','cat','crocodile','elephant','hawk','kangaroo','lion','panda','ostrich','sheep','tiger','zebra'];
var start = function (stop, frame, task, interval) {
    window.clearTimeout(frameID);
    timeoutID = window.setTimeout(stop, frame);
    intervalID = window.setInterval(task, interval);
};
var stop = function () {
    window.clearInterval(intervalID);
    window.clearTimeout(frameID);
    var summary = "During " + frame/1000 + " seconds, " + count + " animals have moved into the zoo. Be sure to provide them with three meals per day.";
    var ref = document.getElementById('total');
    ref.insertAdjacentHTML('afterbegin', summary);
};
var task = function () {
    var ref = document.getElementById('animals');
    count ++;
    var type = Math.floor(Math.random() * 12);
    var newanimal = "<div class=\'animal " + species[type] + "\'></div>";
    ref.insertAdjacentHTML('beforeend', newanimal);
  
};
start(stop, frame, task, interval);