// if we pass argument to function it can be used for multiple objects/sprites
// we pass argument as object names while calling a function and it is collected by function definition 
var fixedBlock, movingBlock;
var trex, obstacle; 

function setup() {
  createCanvas(800,400);
  
  fixedBlock = createSprite(400, 200, 50, 50);
  movingBlock = createSprite(200, 200, 50, 50);

  trex = createSprite(400, 300, 40, 40);
  obstacle = createSprite(200, 300, 40, 40);
}


function draw() {
  background(255,255,255);  

  movingBlock.x = mouseX;
  movingBlock.y = mouseY;

  trex.x = mouseX;
  trex.y = mouseY;

  if(isTouching(fixedBlock, movingBlock)){
    fixedBlock.shapeColor = "yellow";
    movingBlock.shapeColor = "yellow";
  }else{
    fixedBlock.shapeColor = "red";
    movingBlock.shapeColor = "red";
  }
  if(isTouching(trex, obstacle)){
    trex.shapeColor = "yellow";
    obstacle.shapeColor = "yellow";
  }else{
    trex.shapeColor = "red";
    obstacle.shapeColor = "red";
  }

  
  drawSprites();
}

function isTouching(object1, object2){
  if( object1.x - object2.x < object1.width/2 + object2.width/2 &&
    object2.x - object1.x < object1.width/2 + object2.width/2 &&
    object1.y - object2.y < object1.height/2 + object2.height/2 &&
    object2.y - object1.y < object1.height/2 + object2.height/2  ){
     return true;
  }else{
    return false;
  }
}