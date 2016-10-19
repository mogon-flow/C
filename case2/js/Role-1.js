var Role = function (ref, avatar, left, top, showup, speed) {
    this.ref = ref;
    this.avatar = avatar;
    this.left = left + 'px';
    this.top = top + 'px';
    this.showup = showup;
    this.speed = speed;

    this.setup = function () {
        this.ref.style.left = this.left;
        this.ref.style.top = this.top;
        this.ref.style.backgroundImage = "url(" + avatar + ")";
        this.ref.style.visibility = this.showup;
    };

    this.setVisibility = function (showup) {
        this.showup = showup;
        this.ref.style.visibility = showup;
    };

    this.setPosition = function (left, top) {
        this.left = left + 'px';
        this.top = top + 'px';
        this.ref.style.left = this.left;
        this.ref.style.top = this.top;
    };

    this.move = function (direction) {
        // Read the current position
        var left = parseFloat(this.left);
        var top = parseFloat(this.top);
        var speed = this.speed;
        // Update the position according to direction and speed
        if (direction === 0) {//up
            top = top - this.speed;
        }
        if (direction === 1) {//left
            left = left + speed;
        }
        if (direction === 2) {//down
            top = top + speed;
        }
        if (direction === 3) {//right
            left = left - speed;
        }
        // Move the role to the new position
        this.setPosition(left, top);
    };

};