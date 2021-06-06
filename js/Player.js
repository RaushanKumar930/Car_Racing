/*class Player{
    constructor(){
        this.index = null;
        this.distance = 0;
        this.name = null;
    }
    getCount(){
        var playerCountRef = database.ref("playerCount")
        playerCountRef.on("value",(data) => {
            playerCount = data.val();
        });
    }
    updateCount(count){
        database.ref("/").update({
            playerCount : count
        });
    }
    update(){
        var playerIndex = "players/player" + this.index
        database.ref(playerIndex).set({
            name : this.name, 
            distance : this.distance
        })
    }
    static getPlayerInfo(){
        var playerInfoRef = database.ref("players");
        playerInfoRef.on("value", (data)=>{
            allPlayers = data.val()
        });
    }
}*/

class Player {
    constructor(){
      this.index = null;
      this.distance = 0;
      this.name = null;
      this.rank = 0;
    }
    
    getCarsAtEnd(){
      var carsAtEndRef = database.ref('carsAtEnd');
      carsAtEndRef.on("value",(data)=>{
        carsAtEnd = data.val();
      })
    }
    updateCarsAtEnd(rank){
      database.ref("/").update({
        carsAtEnd: rank
      })
    }
    getCount(){
      var playerCountRef = database.ref('playerCount');
      playerCountRef.on("value",(data)=>{
        playerCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        playerCount: count
      });
    }
  
    update(){
      var playerIndex = "players/player" + this.index;
      database.ref(playerIndex).set({
        name:this.name,
        distance:this.distance,
        rank:this.rank
      });
    }
  
    static getPlayerInfo(){
      var playerInfoRef = database.ref('players');
      playerInfoRef.on("value",(data)=>{
        allPlayers = data.val();
      })
    }
  }