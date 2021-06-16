var ship, ship_moving, edges;
var seaImage , isea;
var sea;


function preload(){
  ship_moving = loadAnimation("ship1.png","ship2.png","ship3.png","ship4.png");
  seaImage = loadImage("sea.png");
}

function setup(){
  createCanvas(800,300);
  
 // creating sea
  sea = createSprite(410,170,100,10);
  sea.addImage("infinitesea",seaImage);
  sea.scale = 0.2;
  
 
  // creating ship
  ship = createSprite(730,160,20,50);
  ship.addAnimation("moving",ship_moving);
  ship.scale = 0.2;
  edges = createEdgeSprites();
  

 // creating isea
 isea = createSprite(400,285,800,70);
 isea.visible = false;

}


function draw(){
  background("sea.png");
 

  if (keyDown("space")){
    sea.velocityX = 2;

  }
  
  
  if (sea.x < 0){
    sea.x = sea.width/2;
    
  }

  ship.collide(isea);

  drawSprites();
}