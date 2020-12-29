class Dice{
constructor(x,y){
this.x = x;
this.y = y;
this.width = 20;
this.height = 20;
}

display(){
fill("white");
rect(this.x,this.y)

}


mousePressed(){
var number = random(1,6);
text(number,x/2,y/2);
}
}