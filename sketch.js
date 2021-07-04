const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, pig1;

var rope


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  engine = Engine.create()
  world = engine.world

  gr = new Ground(400,310)
  block1 = new Block(300,275,30,40)
  block2 = new Block(330,275,30,40)
  block3 = new Block(480,275,20,40)
  block4 = new Block(450,275,30,40)
  block5 = new Block(420,275,30,40)
  block6 = new Block(390,275,30,40)
  block7 = new Block(360,275,30,40)
  block8 = new Block(330,235,30,40)
  block9 = new Block(360,235,30,40)
  block10 = new Block(390,235,30,40)
  block11 = new Block(420,235,30,40)
  block12 = new Block(450,235,30,40)
  block13  = new Block(360,195,30,40)
  block14 = new Block(390,195,30,40)
  block15 = new Block(420,195,30,40)
  block16 = new Block(390,155,30,40)
  polygon1 = new polygon(100,200,30,30)
  rope = new Rope(polygon1.body,{x:200,y:50})
}

function draw() {
  background(255,255,255);  
gr.display()
block1.display()
block2.display()
block3.display()
block4.display()
block5.display()
block6.display()
block7.display()
block8.display()
block9.display()
block10.display()
block11.display()
block12.display()
block13.display()
block14.display()
block15.display()
block16.display()
polygon1.display()
rope.display()

Engine.update(engine)

}

function mouseDragged(){
  Matter.Body.setPosition(polygon1.body, {x:mouseX, y:mouseY})
  }

  function mouseReleased(){
    rope.fly()   
}

function keyPressed(){
  if(keyCode === 32){
    rope.attach(polygon1.body);
    
  }
}