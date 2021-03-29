const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body=Matter.Body
var engine, world;
var box1, pig1;
var backgroundImg,platform;
var constrainedlog,chain;
//var keyDown;
function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(438, 50, 300, 20);

    box1 = new Box(350,200,20);
    box2 = new Box(400,200,20);
   
    box3 = new Box(450,200,20);
    box4 = new Box(500,200,20);

   
    chain=new Slingshot(box1.body,{x:350,y:50})

    chain2=new Slingshot(box2.body,{x:400,y:50})

    chain3=new Slingshot(box3.body,{x:450,y:50})

    chain4=new Slingshot(box4.body,{x:500,y:50})
   
    
}
function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    
chain2.display();
chain3.display();
chain4.display();
    box3.display();
    box4.display();
    

    platform.display();
    
    chain.display();
    
   
    

function mouseDragged(){
    //Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})
}
function keyPressed() {
    if(keyCode===UP_ARROW){
        Matter.Body.applyForce(box1.body,box1.body.position,{x:-50,y:-45})
    }
    
    
}
}