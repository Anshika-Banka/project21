var bullet,speed,weight;
var wall,thickness;
function setup() 
{
  createCanvas(800,400);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
  bullet=createSprite(50,200,150,50);
  wall=createSprite(500,200,thickness,height/2);
  wall.shapeColor="blue";
}

function draw() {
  background(255,255,255);  
  bullet.velocityX=speed;
  if( hasCollided (bullet,wall))
  {
    bullet.velocityX=0;
    var damage=0.5 *weight* speed* speed/(thickness*thickness*thickness);
    if(damage>10)
    {
      wall.shapeColor=color(255,0,0);
    }
    if(damage<10)
    {
      wall.shapeColor=color(0,255,0);
    }
    
  }
  drawSprites();
}