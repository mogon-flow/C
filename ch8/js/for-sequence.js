var start = 1; // Set up the first value 
var step = 2; // Set up the step
var length = 10; // Set up the sequence length
var sequence = []; // Declare a sequence in an array 
sequence.push(start); // Push the first value into sequence

for (var i = 0; i < length; i++) {
  var next = sequence[i] + step; //Calculate the next value by sequence rule
  sequence.push(next); // Push next into sequence
  // Print log
  console.log('==== Iteration #' + (i + 1) + ' -> sequence: ');
  sequence.forEach(function (element) { //Print the current sequence
    console.log(element + ',');
  });
}

console.log('Loop terminates.');
