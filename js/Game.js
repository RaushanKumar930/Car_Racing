/*class Game{
    constructor(){

    }
    getState(){
        var gameStateRef = database.ref("gameState")
        gameStateRef.on("value",function(data){
            gameState = data.val();
        });
    }
    update(state){
        database.ref("/").update({
            gameState : state
        });
    }
    start(){
        if(gameState === 0){
            player = new Player();
            player.getCount();
            form = new Form();
            form.display();
        }
    }
    play(){
        form.hide();
        textSize(30);
        text("Game Start", 120, 100);
        Player.getPlayerInfo();
        if(allPlayers !== undefined){
            var displayPosition = 130
            for( var plr in allPlayers){
                if(plr === "player" + player.index){
                    fill("red")
                }else{
                    fill("green")
                }
                displayPosition += 20
                textSize(15)
                text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120, displayPosition)
            }
        }
            if(keyIsDown("up") && this.play.index !== null){
                player.distance += 50
                player.update()
        }
    }
}*/

class Game {
    constructor(){}
  
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
      car1 = createSprite(100,200);
      car1.addImage(car1Img)
      car2 = createSprite(300,200);
      car2.addImage(car2Img)
      car3 = createSprite(500,200);
      car3.addImage(car3Img)
      car4 = createSprite(700,200);
      car4.addImage(car4Img)
      cars = [car1, car2, car3, car4]
    }
  
    play(){
      form.hide();
      //textSize(30);
      //text("Game Start", 120, 100)
      Player.getPlayerInfo();
      player.getCarsAtEnd();
  
      if(allPlayers !== undefined){
        background(groundImg);
        image(track,0,-displayHeight*4,displayWidth,displayHeight*5)
       // var display_position = 130;
       var index = 0
       var x = 150
       var y 
        for(var plr in allPlayers){
          index ++
          x += 220
          y = displayHeight - allPlayers[plr].distance
          cars[index-1].x = x
          cars[index-1].y = y
          /*if (plr === "player" + player.index)
            fill("red");
          else
            fill("green");
  
          display_position+=20;
          textSize(15);
          text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)*/
          if (plr === "player" + player.index){
            cars[index-1].shapeColor = "red"
            camera.position.x = displayWidth/2
            camera.position.y = cars[index-1].y
            fill("green")
            ellipse(x,y,70,150)
            textSize(20)
            fill("black")
            text(allPlayers[plr].name,x,y+70)
          }else{
            cars[index-1].shapeColor = "black"
          }
        }
      }
  
      if(keyIsDown(UP_ARROW) && player.index !== null){
        player.distance +=50
        player.update();
      }
      if(player.distance > 3700){
        gameState = 2
        carsAtEnd++
        player.updateCarsAtEnd(carsAtEnd)
        player.rank = carsAtEnd
        player.update()
      }
      drawSprites();
    }
    end(){
      console.log("Game Ended")
      car1.destroy()
      car2.destroy()
      car3.destroy()
      car4.destroy()
      var display_position = 130;
      for(var plr in allPlayers){
            display_position+=20;
            textSize(15);
            text(allPlayers[plr].name + ": " + allPlayers[plr].rank, 120,display_position)
      }
    }
  }