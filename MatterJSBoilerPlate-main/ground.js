class ground
{
    constructor(x,y,w,h)
{
    var options = {
    isStatic:true
}
 
this.body = Bodies.rectangle(x,y,w,h,options)
this.w = w;
this.h = h;
World.add(world,this.body);
}
    display()
{
    groundPos = this.body.position;

    push()
    translate(groundPos.x, groundPos.y);
    rectMode(CENTER)
    strokeWeight(4);
    fill(255,255,0);
    rect(0,0,this.w,this.h)
    pop()

}
   

}






