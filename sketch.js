var runningAnimation,boy;
var backgroundImg,background1;
var ground1,groundImg;


function preload(){
  
  backgroundImg = loadImage("background.jpg");
  runningAnimation = loadAnimation("png1.png","png2.png","png3.png");
  groundImg = loadImage("ground1.png");
  
}
function setup() {
  createCanvas(displayWidth,displayHeight);
  
  background1 = createSprite(700,400);
  background1.addImage(backgroundImg);
  background1.velocityX = -4;

  boy = createSprite(200,displayHeight-155,20);
  boy.addAnimation("runningBoy",runningAnimation);

  ground1 = createSprite(displayWidth/2,displayHeight-10);
  ground1.addImage(groundImg)

}

function draw() {
  background("blue");

  if(background1.x < 400){
    background1.x = 1000;
  }
  console.log(background1.width)
  drawSprites();
}