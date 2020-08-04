function SideChain(x,y,r){
    var options={
        friction: 0,
        restitution: 0.95,
        isStatic: false
        
    }

    this.body=Bodies.circle(x,y,r,options);
    this.r=r;
    this.body.velocityY=random(-5,-12);
    this.balls=[];
   
    World.add(world,this.body);
    this.show=function(){
        
        fill("orange");
        ellipseMode(CENTER);
        strokeWeight(2);
        ellipse(this.body.position.x,this.body.position.y,this.r*2);

        if(this.body.position.y>390){
            p1.hide();
        }
      
    }
  
}