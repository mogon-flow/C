var count = 0;
var ref = document.getElementById('output');
var intervalID = window.setInterval(task, 1000);
function task() {    
    count++;
    ref.insertAdjacentHTML('beforeend', "<p>Time interval  " + count + "</p>");
    stopCount(); // Call stopCount to clear the timer
}
var stopCount = function () { // Declare the function stopCount
    if (count === 10) { // Check if count is 10; if so, clear the timer.
        window.clearInterval(intervalID);        
    }
};