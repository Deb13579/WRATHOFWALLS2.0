var ball 
var prize 
var wall1 
var wall2 
var wall3 
var wall4 
var wall5 
var wall6 
var wall7 
var wall8 
var wall9 
var wall10
var wall11
var wall12
var Deaths = 0
function setup() {
   ball = createSprite(200,50,25,25);
  ball.shapeColor = "blue"
   prize = createSprite(370,370,25,25)
  prize.shapeColor = "gold"
   wall1 = createSprite(10,250,10,400)
   wall2 = createSprite(100,55,170,10)
   wall3 = createSprite(390,250,10,400)
   wall4 = createSprite(300,55,170,10)
  wall1.shapeColor = "red"
  wall2.shapeColor = "red"
  wall3.shapeColor = "red"
  wall4.shapeColor = "red"
   wall5 = createSprite(125,100,100,10)
   wall6 = createSprite(70,150,10,100)
   wall7 = createSprite(275,100,100,10)
   wall8 = createSprite(330,150,10,100)
   wall9 = createSprite(70,250,10,100)
   wall10 = createSprite(330,250,10,100)
   wall11 = createSprite(125,300,100,10)
   wall12 = createSprite(275,300,100,10)
  wall5.shapeColor = "black"
  wall6.shapeColor = "black"
  wall7.shapeColor = "black"
  wall8.shapeColor = "black"
  wall9.shapeColor = "black"
  wall10.shapeColor = "black"
  wall11.shapeColor = "black"
  wall12.shapeColor = "black"
  wall5.velocityY = 6
  wall6.velocityX = 6
  wall7.velocityY = 6
  wall8.velocityX = 6
  wall9.velocityX = -6
  wall10.velocityX = -6
  wall11.velocityY = -6
  wall12.velocityY = -6
  
}
  function draw() {
    createCanvas(400,400)
    background("lime");
    
   text("Deaths = " + Deaths, 340,20)
    edges = createEdgeSprites()
  ball.bounceOff(edges);
    wall5.bounceOff(edges);
    wall6.bounceOff(edges);
    wall7.bounceOff(edges);
    wall8.bounceOff(edges);
    wall9.bounceOff(edges);
    wall10.bounceOff(edges);
    wall11.bounceOff(edges);
    wall12.bounceOff(edges);
   
    if(keyDown(UP_ARROW)) {
      ball.y = ball.y - 4
    }
    if(keyDown(LEFT_ARROW)) {
      ball.x = ball.x - 4
    }
    if(keyDown(DOWN_ARROW))  {
      ball.y = ball.y + 4
  }
    if(keyDown(RIGHT_ARROW)) {
      ball.x = ball.x + 4
    }
  
   if(ball.isTouching(wall1) || ball.isTouching(wall2) || ball.isTouching(wall3) || ball.isTouching(wall4) || ball.isTouching(wall5) || ball.isTouching(wall6) || ball.isTouching(wall7) || ball.isTouching(wall8) || ball.isTouching(wall9) || ball.isTouching(wall10) || ball.isTouching(wall11) || ball.isTouching(wall12) ) 
    {
      ball.x = 200 
      ball.y = 10
      Deaths = Deaths + 1
    }
    if(ball.isTouching(prize))
    {
      fill("red");
      textSize(90);
     text("You won!",15, 200);
     ball.x = 350
     ball.y = 370
     text("Press Space to try again")
  }
  if(keyDown("space")){
    ball.x = 200
    ball.y = 50
    Deaths = 0
  }
    drawSprites();
    
  }