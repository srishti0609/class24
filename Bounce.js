function BounceOff(){
    if(p1.x < p1.r || p1.x > width - p1.r){
         p1.velocityX = p1.velocityX * -1;
     } 
    if(p1.y < p1.r) {
         p1.velocityY = p1.velocityY * -1;
         }
}