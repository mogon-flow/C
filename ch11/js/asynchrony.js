console.log('a');
var intervalID = setInterval(function () {
  console.log('b');
  window.clearInterval(intervalID);
}, 200);
console.log('c');
console.log('d');