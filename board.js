class Board {
    constructor(x,y) {
      this.x = x;
      this.y = y;
      this.width = 200;
      this.height = 200;
      this.image = loadImage("ludoBoard.png");
      this.ludoBoard = createSprite(displayWidth/2-300,displayHeight/2-150,this.width,this.height);

    }
    display(){
      rect(this.x,this.y,this.width,this.height)
      image(this.image,this.x,this.y,this.width,this.height);
      this.ludoBoard.addImage("ludoBoard.png",boardImg);
    }
  };
