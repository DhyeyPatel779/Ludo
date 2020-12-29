var form
var board
var player
var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

function preload(){

}

function setup(){
createCanvas(displayWidth-20,displayHeight-30);



form = new Form();
}


function draw(){
 form.display();
}
