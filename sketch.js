// You could have multiple flags like: start, launch to indicate the state of the game.
const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.

/*


*/
var ground;
var tanker;
var balls;

function setup() {
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
var canvas=createCanvas(1200,400);
engine = Engine.create();
    world = engine.world;

ground=new Ground(600,height-10,1200,20);
take1 = new Tanker(150,230,100,30);
 take2 = new Tanker(150,295,200,100);
  take3 = new Tanker(150,210,50,10);
   take4 = new Tanker1(50,295,40,100);
    take5 = new Tanker1(250,295,20,100);
     take6 = new Tanker1(100,230,3,30);
      take7 = new Tanker1(200,230,3,30);
       take8 = new Tanker1(125,210,5,10);
        take9 = new Tanker1(175,210,5,10);
         take10 = new Tanker1(150,205,20,20);
         shootpart1 = new TankerHead(300,295,100,20);
         wheel1 = new TankerWheel(70,362,17);
          wheel2 = new TankerWheel(110,362,17);
           wheel3 = new TankerWheel(150,362,17);
            wheel4 = new TankerWheel(190,362,17);
             wheel5 = new TankerWheel(230,362,17);
           for(i=0;i<200;i++){
             p1=new SideChain(random(300,1100),random(0,200),17);
             p1.show();
             p1.velocityY=-12
            
             World.add(world,p1);
             }
}

function draw() {
// Remember to update the Matter Engine and set the background.
Engine.update(engine);
ground.display();
take1.display();
take2.display();
take3.display();
take4.display();
take5.display();
take6.display();
take7.display();
take8.display();
take9.display();
take10.display();
shootpart1.display();
wheel1.display();
wheel2.display();
wheel3.display();
wheel4.display();
wheel5.display();


}


function keyReleased() {
    // Call the shoot method for the cannon.
}