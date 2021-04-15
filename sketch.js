
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var fish1=[]
var fish2=[]
function preload(){
    bg1=loadImage("images/bg2.jpg")
}

function setup(){
    canvas = createCanvas(1600,800)
    engine = Engine.create();
    world = engine.world;
    police = new PoliceSubmarine(200,750,200,200)
    ground  = new Ground(800,790,1600,10)
    target = new Target(100,750,200,200)
    
    
   
    

    

    
}

function draw(){
    background(bg1);
    Engine.update(engine);
    police.display()
    fill("lightblue")
    ground.display()
  target.display()
 // fish.display()
  fish2.display()
  if(frameCount%50===0){
  fish= new Fish(1500,300,100,100)
  fish1.push(fish)    
  }
  for(var i=0;i<fish1.length;i++){
  fish1[i].display()    
  }
   
   if(frameCount%50===0){
   fishO= new Fish2(1200,350,100,100)
   fish2.push(fishO)
   }
   for(var i=0;i<fish2.length;i++){
   fish2[i].display() 

   }   
   }

