function istouching(sprite, sprite2) {
    if (Math.abs(sprite.y-sprite2.y)<sprite.height/2+sprite2.height/2 && Math.abs(sprite.x-sprite2.x)<sprite.width/2+sprite2.width/2){
      sprite.shapeColor = "green"
      sprite2.shapeColor = "green"
    }
  }
  
  function bounceOff(sprite, sprite2) {
    if (Math.abs(sprite.y-sprite2.y)<sprite.height/2+sprite2.height/2 && Math.abs(sprite.x-sprite2.x)<sprite.width/2+sprite2.width/2){
      sprite.velocityX = sprite.velocityX *-1
      sprite2.veloictyX = sprite2.velocityX *-1
      sprite.velocityY = sprite.velocityY *-1
      sprite2.velocityY = sprite2.velocityY *-1
    }
  }