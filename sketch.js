
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var ball;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);

	

	engine = Engine.create();
	world = engine.world;


	ground = new Ground(400,650,1900,30);
	ball = new Ball(200,450,70);
	dustbin1 = new Dustbin(1200,650);
	// dustbin2 = new DustBin(700,585,30,100);
	// dustbin3 = new DustBin(575,620,220,30);


	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1600,
		  height: 700,
		  wireframes: false
		}
	  });
  
	  Engine.run(engine);
	  Render.run(render);


  
}


function draw() {
	Engine.update(engine);
  rectMode(CENTER);
  background(200);

  ground.display();
  ball.display();
  dustbin1.display();
//   dustbin2.display();
//   dustbin3.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:133,y:-150});
	}
}



