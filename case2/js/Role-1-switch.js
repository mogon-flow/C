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
        // Move the role to the new position
        this.setPosition(left, top);
    };

};