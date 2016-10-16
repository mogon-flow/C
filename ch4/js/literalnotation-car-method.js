// Create an object instance using literal notation
var mycar = {
    make: 'Chevrolet',
    model: 'Charger',
    avatar: 'chevrolet.png',
    year: 2010,
    color: 'red',
    safety: 5,
    currentSpeed: 0,
    accelerate: function (mph) {
        this.currentSpeed += mph;
    },
    brake: function () {
        this.currentSpeed = 0;
    }
};

// Diaplay the current speed of mycar
window.alert("The current speed is " + mycar.currentSpeed);

// Make a call to the method accelerate with an argument value 20
mycar.accelerate(20);
// Display the speed after calling accelerate
window.alert("After calling accelerate, the speed is " + mycar.currentSpeed);

// Make a call to the method brake
mycar.brake();
// Display the speed after calling brake
window.alert("After calling brake, The speed is " + mycar.currentSpeed);