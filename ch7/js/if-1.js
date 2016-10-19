var commands = [
  'Run up',
  'Run down',
  'Run left',
  'Run right'
];
var message = window.prompt('Enter your message:');
if (message === commands[0]) {
  window.confirm('You entered ' + commands[0] + '.');
}
if (message === commands[1]) {
  window.confirm('You entered ' + commands[1] + '.');
}
if (message === commands[2]) {
  window.confirm('You entered ' + commands[2] + '.');
}
if (message === commands[3]) {
  window.confirm('You entered ' + commands[3] + '.');
}