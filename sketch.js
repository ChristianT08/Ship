//Sea = ground
//ship = t rex 
var shipimage
var seaimage

var ship 
var sea 

function preload(){
  shipimage = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
  seaimage = loadImage("sea.png")
} 

function setup(){
  createCanvas(400,400);
  sea = createSprite(200,180,400,20);
 sea.addImage("sea",seaimage);
 sea.x = sea.width /2;
 sea.velocityX = -4;
  //create a ship Sprite
 ship = createSprite(50,160,20,50);
 ship.addAnimation("ship", shipimage);
 ship.scale = 0.5;

//create a ground sprite
 
  
}

function draw() {
  background("blue");
  if (sea.x < 0) {
    sea.x = sea.width / 2;
  }
  drawSprites()
  text(mouseX+","+mouseY,mouseX,mouseY)
}