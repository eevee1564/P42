var iss, spaceCraft, bg, issImage, scImage;
var dock = false;

function preload(){

  bg = loadImage("spacebg.jpg");
  issImage = loadImage("iss.png");
  sc1 = loadImage("spacecraft1.png");
  sc2 = loadImage("spacecraft2.png");
  sc3 = loadImage("spacecraft3.png");
  sc4 = loadImage("spacecraft4.png");

}

function setup() {

  createCanvas(800,400);
  spaceCraft=createSprite(285, 240);
  spaceCraft.addImage(sc1);
  spaceCraft.scale = 0.15;

  iss=createSprite(330,130);
  iss.addImage(issImage);
  iss.scale=0.25;

}

function draw() {
  background(bg);
  
  spacecraft.addImage(scimg);
  if(!hasDocked){
    spacecraft.x = spacecraft.x + random(-1,1);
    
  if(keyDown("UP_ARROW")){
    spacecraft.y = spacecraft.y -2;
  }
    
  if(keyDown("LEFT_ARROW")){
      spacecraft.addImage(scimg3);
    spacecraft.x = spacecraft.x - 1;
  }
    
  if(keyDown("RIGHT_ARROW")){
      spacecraft.addImage(scimg2);
    spacecraft.x = spacecraft.x + 1;
  }
    
  if(keyDown("DOWN_ARROW")){
      spacecraft.addImage(scimg1);
  }
}
  if(spacecraft.y <= (iss.y+70) && spacecraft.x <= (iss.x-10)){
    hasDocked = true;
    textSize(25);
    fill("white")
    text("Docking Successful!", 200, 300);
  }
  drawSprites();
}
