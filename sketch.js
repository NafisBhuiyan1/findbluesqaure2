var sprite, sprite2, sprite3
function setup() {
  createCanvas(800,400);
  sprite = createSprite(400, 200, 50, 50);
  sprite2 = createSprite(200, 200, 50, 50);
  sprite3 = createSprite(600, 200, 50, 50);
  sprite.velocityY=1
  sprite.velocityX=1
  sprite3.velocityY=1
  sprite3.velocityX=1
}

function draw() {
  background("red");  
  sprite2.x=World.mouseX
  sprite2.y=World.mouseY
  sprite2.shapeColor = "orange"
  sprite3.shapeColor = "blue"
  sprite.shapeColor = "red"
  // if(sprite2.isTouching(sprite)){
  //   sprite.shapeColor = "blue"
  //   sprite2.shapeColor = "green"
  // }
  istouching(sprite2, sprite3)
istouching(sprite, sprite2);
bounceOff(sprite3, sprite2)
bounceOff(sprite, sprite2)
  drawSprites();

}



