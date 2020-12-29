class Board {
    constructor(x,y) {
      this.x = x;
      this.y = y;
      this.width = 500;
      this.height = 500;

    }
    display(){
      rect(this.x,this.y,this.width,this.height)
    }
  };
