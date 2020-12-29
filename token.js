class Token{
constructor(x,y,r,color){
this.x = x;
this.y = y;
this.r = r;
this.color = color;
}

display(){
fill(this.color);
circle(this.x,this.y,this.r);

}

}