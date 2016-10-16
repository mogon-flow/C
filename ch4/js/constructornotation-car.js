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