var bullet, wall;
var speed, weight, thickness;

function setup() {
  createCanvas(1600,400);
  
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);

  bullet = createSprite(50, 200, 50, 50);
  wall = createSprite(1200, 200, thickness, height/2);

  bullet.velocityX = speed;
}

function draw() {
  background(0,0,0); 
  if (hasCollided(bullet,wall)) {
    bullet.velocityX = 0;
    var damage = (0.5*weight*speed*speed)/(thickness*thickness*thickness);
    if (damage <= 10) {
      wall.shapeColor = "green";
    }
    
    if (damage > 10) {
      wall.shapeColor = "red";
    }
  } 
  drawSprites();
}

function hasCollided(b,w){
  bRightEdge = b.x + b.width/2;
  wLeftEdge = w.x - w.width/2;
  if (bRightEdge>=wLeftEdge){
    return true;
  }
  else{
    return false;
  }