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

    this.hitWall = function (bottom, maxleft) {
        // Calculate a new left or top position once hitting a wall
        // maxleft is the furthest left position that a role can go.
        // bottom is the deepest distance a role can go down.

        // Check if hitting the ceiling or floor
        if (parseFloat(this.top) >= bottom) { // floor
            this.top = bottom + 'px';
        } else if (parseFloat(this.top) <= 0) { // ceiling
            this.top = 0 + 'px';
        }

        // Check if hitting the left or right wall
        if (parseFloat(this.left) <= 0) { // left wall
            this.left = 0 + 'px';
        } else if (parseFloat(this.left) >= maxleft) { // right wall
            this.left = maxleft + 'px';
        }
    };

    this.move = function (direction, bottom, maxleft) {
        // Read the current position
        var left = parseFloat(this.left);
        var top = parseFloat(this.top);
        var speed = this.speed;
        // Update the position according to direction and speed
        switch (direction) {
            case 0:
                top = top - speed;
                break;
            case 1:
                left = left + speed;
                break;
            case 2:
                top = top + speed;
                break;
            case 3:
                left = left - speed;
                break;
            default:
                window.alert("Wrong command!");
        }
        // If hitting a wall?
        this.hitWall(bottom, maxleft);
        // Move the role to the new position
        this.setPosition(left, top);
    };

    this.fall = function (bottom, maxleft) {
        // maxleft is the furthest left position the role can go.
        // bottom is the deepest position from the top that the role can go down.

        this.move(2, bottom, maxleft); // Move the role a step down
        if (parseFloat(this.top) >= bottom) { // When hitting the bottom,
            this.top = 0 + 'px'; // Send the role back to the ceiling,
            this.left = Math.random() * maxleft + 'px'; // Randomize a left position less than maxleft.
        }
        this.setPosition(this.left, this.top); // Move the role to the new position
    };

};