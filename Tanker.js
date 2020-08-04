class Tanker {
  constructor(x, y, width, height) {
      var options = {
      isStatic: true

     }
     this.body=Bodies.rectangle(x,y,width,height,options);
     this.width=width;
     this.height=height;
     World.add(world,this.body);
    };

    display(){
      
      // Draw the tanker the way you like.
      var pos=this.body.position;
      push();
      rectMode(CENTER);
      fill("brown");
      stroke("blue");
      strokeWeight(2);
      rect(pos.x,pos.y,this.width,this.height);
      pop();
      
      
      
      // You could also use an image if you want a specific look

    };
}
class TankerHead{
  constructor(x,y,w,h){
    var options={
      isStatic: true
    }
    this.body=Bodies.rectangle(x,y,w,h,options);
    this.w=w;
    this.h=h;
    World.add(world,this.body);
  }
  display(){
    var pos=this.body.position;
    var angle=this.body.angle;
    angleMode(DEGREES);
    if(keyIsDown(LEFT_ARROW)&&angle<=1&&angle>=28){
      angle-=1;
      Matter.Body.setAngle(this.body,angle);
    }
    if(keyIsDown(RIGHT_ARROW)&&angle>=-28&&angle<1){
      angle+=1;
      Matter.Body.setAngle(this.body,angle);
    }
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill("brown");
    stroke("blue");
    strokeWeight(2);
    rect(0,0,this.width,this,height);

  }
}
class Tanker1 {
  constructor(x, y, width, height) {
      var options = {
      isStatic: true

     }
     this.body=Bodies.rectangle(x,y,width,height,options);
     this.width=width;
     this.height=height;
     World.add(world,this.body);
    };

    display(){
      
      // Draw the tanker the way you like.
      var pos=this.body.position;
      push();
      ellipseMode(CENTER);
      fill("brown");
      stroke("blue");
      strokeWeight(2);
      ellipse(pos.x,pos.y,this.width*2,this.height);
      pop();
      
      
      
      // You could also use an image if you want a specific look

    };
}

class TankerWheel {
  constructor(x, y, radius) {
      var options = {
      isStatic: true

     }
     this.body=Bodies.circle(x,y,radius,options);
     this.radius=radius;
     World.add(world,this.body);
    };

    display(){
      
      // Draw the tanker the way you like.
      var pos=this.body.position;
      push();
      rectMode(CENTER);
      fill("brown");
      stroke("blue");
      strokeWeight(2);
      rect(pos.x,pos.y,this.width,this.height);
      pop();
      
      
      
      // You could also use an image if you want a specific look

    };
}