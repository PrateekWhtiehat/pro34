const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var sceneimg,scene;
var boy,boysad,boyhappy;
var button;
var rope1,link,heli;

function preload()
{
  sceneimg = loadImage('images (1).jpg')
  heliImg = loadImage('1233.png')
  boysad = loadImage('12312.png')
  boyhappy = loadImage('123.png')
}
function setup() 
{
  createCanvas(600,600);

  engine = Engine.create();
  world = engine.world;

  button = createImg('cut_btn.png');
  button.position(40,30);
  button.size(50,50);
  button.mouseClicked(drop);

  heli = createSprite(150,100,50,50);
  heli.scale =.3;
  heli.addImage(heliImg);

  rope1 = new Rope(8,{x:40,y:30});
  link = new  Link(rope1,heli);

}

function draw() 
{
  background('white');
  image(sceneimg,000,000,600,700)
  
  button.position.x += 1;
  heli.position.x +=3;

  push();
  imageMode(CENTER)
  image(boysad,460,300,90,90)
  pop();

  Engine.update(engine);
  drawSprites();
}
function drop()
{

}

