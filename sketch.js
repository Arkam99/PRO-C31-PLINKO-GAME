const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;
//●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●
function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
 
  
 
  boundry1 = new Ground(0,400,20,800);
 
  boundry2 = new Ground(480,400,20,800);
 
  boundry3 = new Ground(240,800,500,20);
 
  boundry4 = new Ground(240,0,500,20);
 
  ground = new Division(240,790,500,10);
  
     for(var k = 0; k <= width; k = k + 80)
     {
      divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
     }

     for(var j = 75; j <=width; j=j+50)
     {
      plinkos.push(new Plinko(j,75));
     }
   
     for(var j = 50; j <=width-10; j=j+50)
     {
      plinkos.push(new Plinko(j,175));
     }

     for (var j = 75; j <=width; j=j+50) 
     {
      plinkos.push(new Plinko(j,275));
     }

     for (var j = 50; j <=width-10; j=j+50) 
     {
      plinkos.push(new Plinko(j,375));
     }
}

function draw() {
  background(0);

  Engine.update(engine);

  ground.display();

  for(var j = 0; j < plinkos.lenght; j++){
    console.log(plinkos[j]);
    plinkos[j].display();
  }
  

  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
    console.log("hello");
  }

  for(var i = 0; i < particles.lenght; i++){
    particles[i].display();
  }

 // console.log(particles[0]);
 // particles[0].display();
 

  for (var k = 0; k < divisions.length; k++){
    divisions[k].display();
  }
 
  boundry1.display();
  boundry2.display();
  boundry3.display();
  boundry4.display();
 
  drawSprites();
}