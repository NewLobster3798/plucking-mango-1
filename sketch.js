
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var treeimg,treesprite;
var stine;
function preload()
{
treeimg = loadImage("tree.png")	
}

function setup() {
	createCanvas(800,600);
treesprite = createSprite(550,350,50,50);
treesprite.addImage(treeimg);
treesprite.scale = 0.4;
 ground = Bodies.rectangle(400,595,800,10)
stone = new stone(200,200,10);
 groundsprite = createSprite(400,595,800,10)
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(250);
  drawSprites();
 
}



