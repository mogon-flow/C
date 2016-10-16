// Create an object instance using literal notation
var mycar = {
    make: 'Dodge',
    model: 'Charger',
    avatar: 'chevrolet.png',
    year: 2010,
    color: 'white',
    safety: 5,
    currentSpeed: 0,
    accelerate: function (mph) {
        this.currentSpeed += mph;
    },
    brake: function () {
        this.currentSpeed = 0;
    }
};

// Another object instance
var mycar2 = {
    make: 'Ford',
    model: 'F150',
    avatar: 'fordf150.png',
    year: 2014,
    color: 'black',
    safety: 5,
    currentSpeed: 0,
    accelerate: function (mph) {
        this.currentSpeed += mph;
    },
    brake: function () {
        this.currentSpeed = 0;
    }
};