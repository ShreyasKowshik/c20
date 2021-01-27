var movingRec;
var fixedRec;

function setup() {
  createCanvas(800,400);
  movingRec = createSprite(200, 200, 50, 50);
  movingRec.shapeColor = "red";
  movingRec.debug = true;
  fixedRec = createSprite(400, 200, 50, 50);
  fixedRec.shapeColor = "red";
  fixedRec.debug = true;
}

function draw() {
  background(255,255,255);
  movingRec.x = mouseX
  movingRec.y = mouseY
  if(movingRec.x-fixedRec.x < movingRec.width/2 + fixedRec.width/2 && 
    fixedRec.x - movingRec.x < movingRec.width/2 + fixedRec.width/2 &&
    movingRec.y - fixedRec.y < movingRec.height/2 + fixedRec.height/2 && 
    fixedRec.y - movingRec.y < movingRec.height/2 + fixedRec.height/2){
    fixedRec.shapeColor = "blue";
    movingRec.shapeColor = "blue";
  }

  else{
    fixedRec.shapeColor = "red";
    movingRec.shapeColor = "red";
  }














  drawSprites();

}