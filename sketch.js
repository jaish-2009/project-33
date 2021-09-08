const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var bg;
var character,characterImg;
var engine,world;
var snowP = [];

function preload(){
   bg = loadImage ("snow2.jpg")
   characterImg = loadImage("character.jpg")
}


function setup() {
  createCanvas(windowWidth,windowHeight);
  engine = Engine.create();
  world = engine.world;
  character = createSprite(1400, 550, 50, 50);
  character.addImage(characterImg);
  character.scale = 0.4;
}

function draw() {
  background(bg);
  Engine.update(engine);
  
  if(frameCount % 20===0){
    snowP.push(new Snow(random(100,1000),-50,10));

  }

   for(var j = 0 ; j < snowP.length;j++){
     snowP[j].display();
   }
  drawSprites();
}