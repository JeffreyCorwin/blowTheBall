const Engine = Matter.Engine;
//const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Constraint = Matter.Constraint;
const Body = Matter.Body;
//const Composites = Matter.Composites;
//const Composite = Matter.Composite;

let engine;
let world;


var blower, handle, ball, button, l;


function preload(){
}

function setup() {
  createCanvas(800,800);

  engine = Engine.create();
  world = engine.world;

  var ground_options ={
    isStatic: true
  };
 
 

 ground = Bodies.rectangle(400,475,80,20,ground_options);
 World.add(world,ground);

  bower = createSprite(400, 500, 100, 100);
  bower.shapeColor = "brown"

  handle = createSprite(250, 525, 200, 50);
  handle.shapeColor = "brown"

  /*ball = createSprite(400, 430, 50);
  ball.addImage('llll',l);
  ball.scale = 0.1;*/

  //ball = new bal(400, 400, 50);

  var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }

  ball = Bodies.circle(400,10,50,ball_options);
  World.add(world,ball);
  
  button = createButton('click to blow');
  button.position(200,650);
  
  button.size(200,100);
  button.mouseClicked(drop);

  ellipseMode(CENTER);
  rectMode(CENTER);
} 


function draw() {
  background("orange"); 
  Engine.update(engine);

  //ball.display();
  fill("green")
  ellipse(ball.position.x,ball.position.y,50);
  rect(ground.position.x,ground.position.y,80,20);
  drawSprites();
}

function drop(){
  Matter.Body.applyForce(ball, {x:0, y:0}, {x:0, y:-0.09});
}