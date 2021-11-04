var canvas;
var spaceship, spaceshipImage;
var backgroundImage;
var star, starImage;
var obstacle, obstacleImage

function preload() {
  backgroundImage = loadImage("space.jpg");
  spaceshipImage = loadImage("spaceship.png");
  starImage = loadImage("star.png");
  
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
  spaceship = createSprite(650,420,50,20);
  spaceship.addImage("spaceship", spaceshipImage);
  spaceship.scale = 0.45;

  

}

function draw() {
  background(backgroundImage);

  
  drawSprites();
  spawnStar();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function spawnStar(){
  star = createSprite(520,280,20,20);
    star.velocityY = -5;
    star.addImage("star", starImage);

  /*if(frameCount% 60=== 0){
    
    star.y = Math.round(random(20,80));
    
    star.scale = 0.25;
    //star.lifetime = 800;
  }*/
}


