// Declare an array
var cars = [];

// Instantiate four new instances by applying the keyword new to the constructor Car 
cars.push(new Car('Dodge', 'Charger', 'dodge.png', 2010, 'white', 5, 0));
cars.push(new Car('Ford', 'F150', 'fordf150.png', 2014, 'black', 5, 0));
cars.push(new Car('Chevrolet', 'Cruze', 'chevrolet.png', 0, 'red', 5, 0));
cars.push(new Car('Ford', 'Edge', 'ford.png', 2015, 'yellow', 5, 0));

// Log cars
console.log("Before sorting:");
cars.forEach(function (element, index){
  console.log(JSON.stringify(element));
});

// Sort cars by the key 'make' in ascending order
cars.sort(function (a, b) {
  var makeA = a.make.toLowerCase(); // read the key make and convert it to lowercase
  var makeB = b.make.toLowerCase(); 
  if (makeA < makeB) {
    return - 1;
  }
  if (makeA > makeB) {
    return 1;
  }
  if (makeA = makeB) {
    return 0;
  }
});

// After sorting, log sorted cars
console.log("After sorting:");
cars.forEach(function (element, index){
  console.log(JSON.stringify(element));
});

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
