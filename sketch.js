const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
var engine,world,object,ball;


function setup() {
  createCanvas(400,400);
   engine=Engine.create();
  world = engine.world ;
  var options = {isStatic:true};
  var option = {restitution:1}
 object = Bodies.rectangle(200,390,400,15,options);
 ball = Bodies.circle(200,200,50,option);
World.add(world,object);
World.add(world,ball);
  console.log(object.angle);
  console.log(object.position.x);
  console.log(object.position.y);
}

function draw() {
  background(0); 
  Engine.update(engine);
  rectMode(CENTER); 
  rect(object.position.x,object.position.y,400,15);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,50,50);
}