
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var treeObj, stoneObj, groundObj, LauncherObj;
var mango1, mango2, mango3, mango4, mango5;
var world, boy;
var launchingForce=100;

function preload()
{

boy = loadImage("Sprites/boy.png")	
	
}

function setup() {
	createCanvas(1300, 600);

	engine = Engine.create();
	world = engine.world;

	stoneObj = new Stone(235, 420, 30);
	
	mango1 = new mango(1100, 100, 30);
	mango2 = new mango(1170, 130, 30);
	mango3 = new mango(1010, 140, 30);
	mango4 = new mango(1000, 70, 30);
	mango5 = new mango(1100, 70, 30);

	treeObj = new tree(1050, 580);
	groundObj = new Ground(width/2, 600, width, 20)
	LauncherObj = new Launcher(stone.Obj.body, {x:235, y:420})
	
	var render = Render.create({
		element:document.body,
		engine:engine,
		options:{
			width:1300,
			height:600,
			wireframes:false
		}

	})
	Engine.run(engine);
  
}

function draw(){
background(230);
//frameRate(2)
// Engine.update(engine)
textSize(25);
text("Press Space to get a second Chance to Play!!",50 ,50);
image(boy ,200,340,200,300);
//Engine.update(engine)


treeObj.display();
stoneObj.display();
mango1.display();
mango2.display();
mango3.display();
mango4.display();
mango5.display();
groundObject.display();
launcherObject.display();

detectollision(stoneObj,mango1);
detectollision(stoneObj,mango2);
detectollision(stoneObj,mango3);
detectollision(stoneObj,mango4);
detectollision(stoneObj,mango5);


}

function mouseDragged()
{
  Matter.Body.setPosition(stoneObj.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
  launcherObject.fly();
  // distance=int(dist(stoneObj.x,stoneObj.y,mango1.x,mango1.y));
}

function keyPressed() {
  if (keyCode === 32) {
  Matter.Body.setPosition(stoneObj.body, {x:235, y:420}) 
	launcherObject.attach(stoneObj.body);
  }
}

function detectollision(lstone,lmango){
  /*var collision = Matter.SAT.collides(lstone,lmango);
  if(collision.collided){
	  console.log("collided");
	  Matter.Body.setStatic(lmango,false);	
  }*/
mangoBodyPosition=lmango.body.position
stoneBodyPosition=lstone.body.position

var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
//console.log(distance)
// console.log(lmango.r+lstone.r)
	if(distance<=lmango.r+lstone.r)
  {
	//console.log(distance);
	  Matter.Body.setStatic(lmango.body,false);
  }

}



