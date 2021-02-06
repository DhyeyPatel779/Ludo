var form
var board
var player
var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var game;
var ludoBoard,boardImg
var dice;

function preload(){
boardImg = loadImage("ludoBoard.png");
}

function setup(){
createCanvas(displayWidth-20,displayHeight-30);
database = firebase.database();

game = new Game();
game.getState();
game.start();



//form = new Form();
}


function draw(){


 if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState===2){
    game.end()
  }

 // form.display();
}
