var iss_img,bg_img,spacecraft1_img,spacecraft2_img,spacecraft3_img,spacecraft4_img,iss,spacecraft,hasDocked=false

function preload(){
  iss_img=loadImage("iss.png");
  bg_img=loadImage("spacebg.jpg")
  spacecraft1_img=loadImage("spacecraft1.png")
  spacecraft2_img=loadImage("spacecraft2.png")
  spacecraft3_img=loadImage("spacecraft3.png")
  spacecraft4_img=loadImage("spacecraft4.png")
}









function setup() {
  createCanvas(800,400);
   iss=createSprite(330, 130, 50, 50);
   iss.addImage(iss_img);
    iss.scale=0.8;

    spacecraft=createSprite(285,240,50,50);
    spacecraft.addImage(spacecraft1_img);
     spacecraft.scale=0.15;

}

function draw() {
  background(bg_img); 
  
  if(!hasDocked){
    spacecraft.x=spacecraft.x+random(-1,1);
    if(keyDown(UP_ARROW)){
      spacecraft.y=spacecraft.y-2
    }
    if(keyDown(DOWN_ARROW)){
      spacecraft.addImage(spacecraft2_img);
    }
    if(keyDown(RIGHT_ARROW)){
      spacecraft.x=spacecraft.x+2;
      spacecraft.addImage(spacecraft3_img);
    }
    if(keyDown(LEFT_ARROW)){
      spacecraft.x=spacecraft.x-2
      spacecraft.addImage(spacecraft4_img);
    }
  }
  if(spacecraft.y<=(iss.y+70)&&spacecraft.x<=(iss.x+10)){
    hasDocked=true;
    textSize(15);
    text("Docking Successful!",200,300);
  }
  drawSprites();
}