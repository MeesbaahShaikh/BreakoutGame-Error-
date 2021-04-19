var blocks,ball,paddle;
function setup() {
  createCanvas(500,700);

  
 //blocks=createSprite(10,20,40,20)
   ball=createSprite(167,485,40,20)
   paddle=createSprite(195,571,70,10)


   for(var j=20; j<300; j=j+40)
   {
   for(var i=100;i<400;i=i+60)
   {
 
     blocks=createSprite(i,j,40,20);
   }
 }
 
  
}


function draw() {
  background("lightblue")






if(keyDown("right"))
{

  paddle.x=paddle.x+7;
}

if(keyDown("left"))
{

  paddle.x=paddle.x-7;
}

if(keyDown("space"))
{
  start();
}


var edges=createEdgeSprites();

ball.bounceOff(edges[1])
ball.bounceOff(edges[0])
ball.bounceOff(edges[2])
ball.bounceOff(paddle)

for(var j=0; j<300; j=j+40)
   {
   for(var i=100;i<400;i=i+60)
   {
 
    ball.bounceOff(blocks)
    
   }
 }
//ball.bounceOff(blocks)


if(ball.isTouching(blocks))
{
  blocks.destroy();
}
text("(" +mouseX +"," +mouseY + ")",mouseX,mouseY)
  drawSprites();
}

function start()
{
  ball.velocityX=5;
  ball.velocityY=5;
}