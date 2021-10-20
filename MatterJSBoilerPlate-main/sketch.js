var ball;
var ground1,ground2;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
var ball_options={
	restituton:0.3,
	density:1.2
}
ball = bodies.circle(100,200,20,ball_options);
World.add(world,ball);

	Engine.run(engine);
  
}


function draw() {
  
  background(500);
  rectMode(CENTER);
  ellipsemode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20)
  
 
}



