console.log('a');
var intervalID = setInterval(callback, 200);
console.log('c');
console.log('d');

function callback () {
  console.log('b');
  window.clearInterval(intervalID);
}