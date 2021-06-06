var  database
var gameState = 0;
var playerCount;
var carsAtEnd;
var form, player, game;
var allPlayers, car1, car2, car3, car4, cars;
var car1Img,car2Img, car3Img, car4Img, groundImg, track

function preload(){
    track = loadImage("images/track.jpg")
    groundImg = loadImage("images/ground.png")
    car1Img = loadImage("images/car1.png")
    car2Img = loadImage("images/car2.png")
    car3Img = loadImage("images/car3.png")
    car4Img = loadImage("images/car4.png")
}

function setup(){
    createCanvas(displayWidth-20 ,displayHeight-30);
    database = firebase.database();
    
    game = new Game();
    game.getState();
    game.start()
}

function draw(){
    if(playerCount === 4){
        game.update(1)
    }
    if(gameState === 1){
        clear();
        game.play()
    }
    if(gameState === 2 && carsAtEnd >= 4){
        game.end()
        game.update(2)
        clear();
    }
}


