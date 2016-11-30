// Declare an array
var stars = [
  'Alpha',
  'Beta',
  'Gamma',
  'Delta',
  'Epsilon',
  'Theta',
  'Chi',
  'Zeta',
  'Mu',
  'Eta'
];
var i = 0; // Set up loop counter
while (stars[i]) { // if stars[i] is defined, run statements in loop body
  console.log('loop counter i = ' + i + ', ' + 'stars[' + i + '] = ' + stars[i]);
  i++; // Increment loop counter
}
console.log('Now the while loop ends. The loop counter i = ' + i + '. stars[' + i + '] = ' + stars[i]);