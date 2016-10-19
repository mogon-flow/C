var Role = function (ref, avatar, left, top, showup) {
    this.ref = ref;
    this.avatar = avatar;
    this.left = left + 'px';
    this.top = top + 'px';
    this.showup = showup;

    this.setup = function() {
        this.ref.style.left = this.left;
        this.ref.style.top = this.top; 
        this.ref.style.backgroundImage ="url(" + avatar + ")";
        this.ref.style.visibility = this.showup;
    };

    this.setVisibility = function(showup) {
        this.showup = showup;
        this.ref.style.visibility = showup;
    };
    
    this.setPosition = function(left, top) {             
        this.left = left + 'px';
        this.top = top + 'px';
        this.ref.style.left = this.left;
        this.ref.style.top = this.top;        
    };    
};