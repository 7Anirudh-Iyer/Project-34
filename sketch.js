const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var b1,ground
var ww,wh
var hold,hold2,hold3,hold4,hold5
var p1,p2,p3,p4,p5

function setup(){
    var canvas = createCanvas(windowWidth,windowHeight);
    engine = Engine.create();
    world = engine.world;
    
    ww=windowWidth
    wh=windowHeight

    b1=new Ball(windowWidth/2,windowHeight/1.5)
    b3=new Ball(windowWidth/2+ww/20,windowHeight/1.5)
    b2=new Ball(windowWidth/2+ww/40,windowHeight/1.5)
    b5=new Ball(windowWidth/2-ww/20,windowHeight/1.5)
    b4=new Ball(windowWidth/2-ww/40,windowHeight/1.5)

    var a={
        isStatic: true
    }
    ground=Matter.Bodies.rectangle(windowWidth/2,windowHeight,windowWidth,10,a)
    World.add(world,ground)

    hold=new Hold(windowWidth/2,windowHeight/2)
    hold2=new Hold(windowWidth/2+ww/5/6,windowHeight/2)
    hold3=new Hold(windowWidth/2+ww/5/3,windowHeight/2)
    hold4=new Hold(windowWidth/2-ww/5/6,windowHeight/2)
    hold5=new Hold(windowWidth/2-ww/5/3,windowHeight/2)

    p1=new Const(hold.body,b1.body)
    p2=new Const(hold2.body,b2.body)
    p3=new Const(hold3.body,b3.body)
    p4=new Const(hold4.body,b4.body)
    p5=new Const(hold5.body,b5.body)
}

function draw(){
background(255)
Engine.update(engine)

line(hold.body.position.x,hold.body.position.y,b1.body.position.x,b1.body.position.y)
line(hold2.body.position.x,hold2.body.position.y,b2.body.position.x,b2.body.position.y)
line(hold3.body.position.x,hold3.body.position.y,b3.body.position.x,b3.body.position.y)
line(hold4.body.position.x,hold4.body.position.y,b4.body.position.x,b4.body.position.y)
line(hold5.body.position.x,hold5.body.position.y,b5.body.position.x,b5.body.position.y)

b1.display()
b2.display()
b3.display()
b4.display()
b5.display()

hold.display()
hold2.display()
hold3.display()
hold4.display()
hold5.display()

}

function keyPressed(){
    if(keyCode===UP_ARROW){
        Matter.Body.applyForce(b5.body,b5.body.position,{x:-285,y:285})
    }
    if(keyCode===DOWN_ARROW){
        Matter.Body.applyForce(b1.body,b1.body.position,{x:-285,y:285})
    }
}

function mouseDragged(){
    Matter.Body.setPosition(b5.body,{x:mouseX,y:mouseY})
}