var count = 0;
var ref = document.getElementById('output');
// Set up a timer for the action 'task'
var intervalID = window.setInterval(task, 1000);
// Declare the function task
function task() {
    count ++;
    ref.insertAdjacentHTML('beforeend', "<p>Time interval  " + count + "</p>");
}