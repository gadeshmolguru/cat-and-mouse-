var canvas,bg;
var together;
var tom,tomImg1,tomImg2,tomImg3;
var mouse,mouseImg1,mouseImg2;

function preload() {
    //load the images here
      
    bg=loadImage("images/garden.png");
    tomImg1=loadAnimation("images/cat1.png");
    tomImg2=loadAnimation("images/cat2.png","images/cat3.png");
    tomImg3=loadAnimation("images/cat4.png");
    mouseImg1=loadAnimation("images/mouse1.png");
    mouseImg2=loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseImg3=loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

      tom = createSprite(870,600);
      tom.addAnimation("tomSleeping",tomImg1);
      tom.scale = 0.2;

      mouse = createSprite(200,600);
      mouse.addAnimation("mouseStanding",mouseImg1);
      mouse.scale = 0.15;


}

function draw() {

    background(bg);
 
    if(tom.x - mouse.x < (tom.width - mouse.width)/2) 
    {
      tom.velocityX=0;
      tom.addAnimation("tomLastImage",tomImg3);
      tom.x=300;
      tom.scale = 0.2;
      tom.changeAnimation("tomLastImage");
      mouse.addAnimation("mouseLastImage",mouseImg3);
      mouse.scale = 0.15;
      mousE.changeAnimation("mouseLastImage");
    } 

    drawSprites();
}

function keyPressed()
{
  if(keyCode === LEFT_ARROW)
  {
    tom.velocityX=-5;
    tom.addAnimation("tomRunning",tomImg2);
    tom.changeAnimation("tomRunning");
    
    mouse.addAnimation("mouseTeasing",mouseImg2);
    mouse.frameDelay = 25;
    mouse.changeAnimation("mouseTeasing");
  }
  

}

