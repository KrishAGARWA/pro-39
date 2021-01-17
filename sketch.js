
var ground,groundImage;
var gameState="serve"
var open,openImage;
var tittle;
function preload(){
groundImage=loadImage("ground.png");
openImage=loadImage("open.png")
}



function setup() {
  createCanvas(600, 500);
  background(255)



}

function draw() {
  background(220);


if(gameState==="serve"){
 tittle=createElement("h1")
tittle.position(600,430)
tittle.html("PRESS SPACE TO START")
 open=createSprite(300,200,200,200)
open.addImage(openImage)
open.scale=0.6
if(keyDown("space")){
gameState="play"

tittle.hide()

}
}
if(gameState==="play"){
ground=createSprite(300,200,900,10);
ground.addImage(groundImage);
ground.scale=1.1;
ground.velocityX=-5
  ground.x=ground.width/2






if(ground.x<0){
  ground.x=ground.width/2
}
}





drawSprites()

}



function hide(){
  tittle.hide()
}
