var catImg;
var mouseImg;
var cat2Img;
var mouse2Img;
var cat3Img;
var mouse3Img;
var cat;
var mouse;

function preload() {
    //load the images here
    catImg=loadImage("images/cat4.png");
    mouseImg=loadImage("images/mouse4.png");
    cat2Img=loadAnimation("images/cat2.png","images/cat3.png");
    mouse2Img=loadAnimation("images/mouse2.png","images/mouse3.png");
    bgImg=loadImage("images/garden.png");
    cat3Img=loadImage("images/cat1.png")
    mouse3Img=loadImage("images/mouse1.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat=createSprite(900,700,20,20);
    cat.addImage(cat3Img);
    cat.scale=0.2;
   
    mouse=createSprite(200,700,20,20);
    mouse.addImage(mouseImg);
    mouse.scale=0.2;
}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
if (cat.x - mouse.x < (cat.width - mouse.width)/2){
    cat.velocityX=0;
    cat.addImage(catImg);
    mouse.addImage(mouse3Img);
}
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === RIGHT_ARROW){
    mouse.addAnimation("mouseTeasing",mouse2Img);
    mouse.changeAnimation("mouseTeasing");
    cat.addAnimation("catRunning",cat2Img);
    cat.changeAnimation("catRunning");
    mouse.frameDelay=25;
    cat.velocityX=-10;
  }
  if(keyCode === LEFT_ARROW){
      mouse.addAnimation("mouseTeasing",mouse2Img);
      mouse.changeAnimation("mouseTeasing");
      cat.addAnimation("catRunning",cat2Img);
      cat.changeAnimation("catRunning");
      mouse.frameDelay=25;
      cat.velocityX=-10;
  }

}
