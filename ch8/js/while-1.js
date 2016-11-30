var total = 0;
var next = true;
var log = document.getElementById('log');
while (next) {
    total++;
    var logline = "<p>You have counted " + total + " times.</p>";
    log.insertAdjacentHTML('beforeend', logline);
    var input = window.prompt('Do you want to continue counting? Enter y for yes or n for no: ');
    next = (input === 'y') ? true : false;
}
var summary = "<p>In summary, you have counted " + total + " times.</p>";
log.insertAdjacentHTML('beforeend', summary);