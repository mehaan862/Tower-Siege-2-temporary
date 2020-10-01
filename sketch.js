const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function setup() {
  createCanvas(1365,600);
  
  engine = Engine.create();
	world = engine.world;

  ground1=new Ground(0,590,3200,10);
  ground2=new Ground(650,400,250,5)
  polygon=new Polygon(150,300,80,80);
  block1=new Block(550,380,50,50);
  block2=new Block(600,380,50,50);
  block3=new Block(650,380,50,50);
  block4=new Block(700,380,50,50);
  block5=new Block(750,380,50,50);
  block6=new Block1(565,335,50,50);
  block7=new Block1(625,335,50,50);
  block8=new Block1(685,335,50,50);
  block9=new Block1(745,335,50,50);
  block10=new Block2(580,285,50,50);
  block11=new Block2(650,285,50,50);
  block12=new Block2(720,285,50,50);
  block13=new Block3(620,240,50,50); 
  block14=new Block3(690,240,50,50);  
  block15=new Block4(655,195,50,50);
  slingshot=new SlingShot(polygon.body,{x:200,y:50})

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(255,255,255);  


  polygon.display();
  block1.display(); 
  block2.display();
  block3.display();
  block4.display();
  block5.display();  
  block6.display();  
  block7.display();  
  block8.display();  
  block9.display();
  block10.display();
  block11.display();
  block12.display(); 
  block13.display(); 
  block14.display();  
  block15.display(); 
  ground1.display();
  ground2.display();
  
  detectCollision(polygon,block1);
  detectCollision(polygon,block2);
  detectCollision(polygon,block3);
  detectCollision(polygon,block4);
  detectCollision(polygon,block5);
  detectCollision(polygon,block6);
  detectCollision(polygon,block7);
  detectCollision(polygon,block8);
  detectCollision(polygon,block9);
  detectCollision(polygon,block10);
  detectCollision(polygon,block11);
  detectCollision(polygon,block12);
  detectCollision(polygon,block13);
  detectCollision(polygon,block14);
  detectCollision(polygon,block15);
}

function mouseDragged(){
  //if (gameState!=="launched"){
        Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
  //}
}


function mouseReleased(){
    slingshot.fly();
}

function detectCollision(polygon,block){
  blockBodyPosition=block.body.position
  polgonBodyPosition=polygon.body.position

  var distance = dist(polygonBodyPosition.x,polygonBodyPosition.y,blockBodyPosition.x,blockBodyPosition.y)
     if(distance<=block.r+polygon.r){
       Matter.Body.setStatic(block.body,false);
     }

}