
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var dustbinImg;
var paper;

function preload(){
	dustbinImg=loadImage("dustbingreen.png")
}
function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	paper=new Paper(600 ,350,100)

	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
  groundObject.display();
  dustbinObj.display();
  paper.display();
  

  image(dustbinImg,1050,400,280,280)
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
	Matter.Body.applyForce(paper.body,paper.body.position,{x:450 	,y:-450})
	}

}
