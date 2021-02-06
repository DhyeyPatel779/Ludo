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
if(keyDown("SPACE")){
    var number = Math.round(random(1,6));
console.log(number);
text(2,50,50);
}
}




}