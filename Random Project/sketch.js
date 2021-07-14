const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground1,ground2,ground3,ground4,ground5,ground6,ground7,ground8,ground9,ground10;

var engine, world;

var angle1 = 180;

var box;

var block;

function preload(){
  //m1 = loadImage("Monster.png");
  //m2 = loadImage("Monster2.png");
  space = loadImage("Space1.jpg");
  //star = loadImage("Star1.png");
}

function setup() {
  createCanvas(displayWidth, displayHeight);
  
  engine = Engine.create();
  world = engine.world;
  
  //star1 = createSprite(698,666,20,20);

  //box = createSprite(685,77,50,50);
  ground1 = new Block(100,300,400,10);
  ground2 = new Block(1340,269,400,10);
  ground3 = new Block(690,150,200,10);
  ground4 = new Block(419,354,10,200);
  ground5 = new Block(964,354,10,200);
  ground6 = new Block(176, 548,200,10);
  ground7 = new Block(1250,548,200,10);//2131
  ground8 = new Block(700,750,200,100);
  ground9 = new Block(420,668,200,10);
  ground10 = new Block(972,668,200,10);

  monster1 = new Monster(1200,500,10,10);
  monster2 = new Monster(1175,247,10,10);
  monster3 = new Monster(93,517,10,10);
  monster4 = new Monster(336,637,10,10);

  star1 = new Star(698,666,20,20);
  js1 = new Player(40,10,40,40);
  
  //Matter.Body.setAngularVelocity(ground4.body, PI/6);

}


function draw() {
  background(space);
  textSize(30);
  text("X: " + mouseX, displayWidth-200,20);
  text("Y: " + mouseY, displayWidth-200,50);
  Engine.update(engine);

 

  monster1.display();
  monster2.display();
  monster3.display();
  monster4.display();

  Monster1();

  ground1.display();
  ground2.display();
  ground3.display();
  ground4.display();
  ground5.display();
  ground6.display();
  ground7.display();
  ground8.display();
  ground9.display();
  ground10.display();
  

  js1.display();


  star1.display();
  
  ground4.ro();
  ground5.rot();
  drawSprites();
  textSize(20);
  /*if(Matter.SAT.collides(js1,star1)){
    text("Hi", displayWidth-200,20);
  }*/
    
}

function Monster1(){
  /*if(monster1.body.position.x <= 1344){
    monster1.body.velocity.x=2
    monster1.dino.changeAnimation("walking2", monster1.image2)
  }
  else if(monster1.body.position.x >= 1148){
    monster1.body.velocity.x=-2
    monster1.dino.changeAnimation("walking", monster1.image);
  }
  console.log(monster1.body.position.x);
  console.log("velocity"+monster1.body.velocity.x);*/
  Matter.Body.setVelocity(monster1.body, 0.01)
}
