class Game {
    constructor(){
  
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form = new Form()
        form.display();
      }
  

    }
  
    play(){
      form.hide();
  
      Player.getPlayerInfo();
      
      if(allPlayers !== undefined){
        //var display_position = 100;
dice = new Dice(100,50);
dice.display();
      
        //index of the array
        var index = 0;
  
        //x and y position of the cars
   //     var x = 175;
   //     var y;
  
        for(var plr in allPlayers){
          //add 1 to the index for every loop
          index = index + 1 ;
  
          //position the cars a little away from each other in x direction
        //  x = x + 200;
          //use data form the database to display the cars in y direction
         // y = displayHeight - allPlayers[plr].distance;

  

         
          //textSize(15);
          //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
        }
  
      }
  
      
      drawSprites();
    }
    end(){
      console.log("gameEnded")
    }
  }
  