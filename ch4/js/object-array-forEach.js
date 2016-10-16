// Declare two arrays
var cars = [];
var lists = [];

// Instantiate four new instances by applying the keyword new to the constructor Car 
cars[0] = new Car('Dodge', 'Charger', 'dodge.png', 2010, 'white', 5, 0);
cars[1] = new Car('Ford', 'F150', 'fordf150.png', 2014, 'black', 5, 0);
cars[2] = new Car('Chevrolet', 'Cruze', 'chevrolet.png', 0, 'red', 5, 0);
cars[3] = new Car('Ford', 'Edge', 'ford.png', 2015, 'yellow', 5, 0);

// Run a callback for each cars item
cars.forEach(function (element,index) {
	lists[index] = JSON.stringify(element);
	console.log(lists[index]);
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