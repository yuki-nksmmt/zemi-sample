//picture size
var locationX;
var locationY;
var velocityX;
var velocityY;

//cursor size
var LogoX;
var LogoY;

//Picture
let sky;
let Cloud;
let nami;
let Futo;

//sound
let sea;

function preload(){
  sky = loadImage("data/sky.jpg");
  Cloud = loadImage("data/Cloud.png");
  nami = loadImage("data/nami.jpg");
  Futo = loadImage("data/Futo.jpeg");
  sea = loadSound("data/sea_wave.mp3");
}
  


function setup() {
  createCanvas(windowWidth,windowHeight);
  noCursor();
  frameRate(12.5);
  
  //nami_location setting
  locationX=0;
  locationY=650;
  velocityX=2;
  velocityY=3;
  
  //cursor_size setting
  LogoX = 50;
  LogoY = 50;
  
  //Cloud
  CX = ceil(random(width));
  CY = ceil(random(height));


}


function draw(){
//back
  background(61,145,255);
//Sky
  image(sky,0,0,width,height);
//Cloud
  image(Cloud,CX,0,width,0);
  CX += 1;
  CX = CX % width;
//nami
  locationY = locationY + velocityY;
  image(nami,0,locationY,width,height);
  if(locationY<650||locationY>720){
    velocityY = velocityY * -1;
  }
//Cursor
  image(Futo,mouseX,mouseY,LogoX,LogoY);
  
//sound
  let vol = (LogoX-40)/100;
    sea.loop();
    sea.amp(vol);
  
  
  if(LogoX<=200&&mouseIsPressed){
    LogoX = LogoX+3;
    LogoY = LogoY+3;
  }else if(LogoX>=50){
    LogoX = LogoX-3;
    LogoY = LogoY-3;
  }
}
