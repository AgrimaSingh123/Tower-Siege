const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var girl,hand,backgroundImg;

function preload(){
	girlImg=loadImage("girl.png");
	handImg=loadImage("hand.png");

	getTime();
}

function setup(){
	createCanvas(800, 300);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground();

	//top layer
	fill("cyan");
	box1=new Box(390+50,155+20);

	//second layer
	fill("magenta");
	box2=new Box(360+50,195+20);
	box3=new Box(390+50,195+20);
	box4=new Box(420+50,195+20);


	//third layer
	box5= new Box(330+50,235+20);
	box6=new Box(360+50,235+20);
	box7=new Box(390+50,235+20);
	box8=new Box(420+50,235+20);
	box9=new Box(450+50,235+20);

	pentagon=new Pentagon(700,100,30);

	rope=new Rope(pentagon.pentagon,{x:213,y:126});
	
	girl=createSprite(100,260,20,30);
	girl.addImage(girlImg);

	hand=createSprite(100,270,30,20);
	hand.addImage(handImg);
	hand.scale=0.7;
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  if(backgroundImg){
	background(backgroundImg);
  }

  drawSprites();

  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();

  pentagon.display();

  rope.display();

  let a =(mouseX-100,mouseY-120);
  if(mouseX>200 && mouseY<150 && mouseY>100){
	hand.rotation=a;
  }
  
  console.log(mouseX,mouseY);
  
}

function mouseDragged(){
	Matter.Body.setPosition(pentagon.pentagon,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	rope.fly();
}

function keyPressed(){
	if(keyCode===32){
		rope.attach(pentagon.pentagon);
	}
}

async function getTime(){
	var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
	var responseJSON=await response.json();
	var datetime=responseJSON.datetime;
	var hours=datetime.slice(11,13);
	if(hours>=06 && hours<=18){
		bg="bg image.webp";
	} else {
		bg="Dark Background.jpg";
	}
	backgroundImg=loadImage(bg);
}