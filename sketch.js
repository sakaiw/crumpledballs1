
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustBin1, dustBin2, dustBin3;
var paper;
var ground;

function setup() {
	createCanvas(800, 700);


  engine = Engine.create();
  world = engine.world;

  dustBin1 = new dustBin(600,650,200,20);
	dustBin2 = new dustBin(690,610,20,100);
  dustBin3 = new dustBin(510,610,20,100);
  
  paper = new Paper(200,450,40);

  ground = new Ground(401,700,800,40);

  Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  dustBin1.display();
  dustBin2.display();
  dustBin3.display();

  paper.display();

  ground.display();
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
  Matter.Body.applyForce(paper.body, paper.body.position, {x:53, y: -53});
  }
}