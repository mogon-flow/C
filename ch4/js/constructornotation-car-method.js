// Declare a constructor Car
function Car(make, model, avatar, year, color, safety, currentSpeed) {
  this.make = make;
  this.model = model;
  this.avatar = avatar;
  this.year = year;
  this.color = color;
  this.safety = safety;
  this.currentSpeed = currentSpeed;
  this.accelerate = function (mph) {
    this.currentSpeed += mph;
  };
  this.brake = function () {
    this.currentSpeed = 0;
  };
}

// Instantiate four new instances by applying the keyword new to the constructor Car 
var car1 = new Car('Dodge', 'Charger', 'dodge.png', 2010, 'white', 5, 0);
var car2 = new Car('Ford', 'F150', 'fordf150.png', 2014, 'black', 5, 0);
var car3 = new Car('Chevrolet', 'Cruze', 'chevrolet.png', 0, 'red', 5, 0);
var car4 = new Car('Ford', 'Edge', 'ford.png', 2015, 'yellow', 5, 0);

// Diaplay the current speed of mycar
window.alert('The current speed of car1 is ' + car1.currentSpeed);

// Prompt the user for a mph (If not a number, speed will become NaN.)
var mph = parseInt(window.prompt('Enter an integer for acceleration rate:'));
// Make a call to the method accelerate with mph as the argument
car1.accelerate(mph);
// Display the speed after calling accelerate
window.alert('After calling accelerate, the speed is ' + car1.currentSpeed);

window.alert('Stop the car now.');
// Make a call to the method brake
car1.brake();
// Display the speed after calling brake
window.alert('After calling brake, The speed of car1 is ' + car1.currentSpeed);
