class Pentagon{
    constructor(x,y,radius){
        var options={
            'restitution':0.8,
            'density':0.4
        }
        this.pentagon=Bodies.circle(x,y,radius/2,options);
        this.x=x;
        this.y=y
        this.radius=radius;

        this.image=loadImage("ball.png");

        World.add(world,this.pentagon);
    }
    display(){
        var pos=this.pentagon.position;
        //ellipse(pos.x,pos.y,this.radius);
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.radius,this.radius);
    }
}