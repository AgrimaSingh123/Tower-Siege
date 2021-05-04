class Box{
    constructor(x,y){

        var options={
            'restitution':0.8
        }

        this.body=Bodies.rectangle(x,y,30,40,options);
        this.x=x;
        this.y=y;
        this.image=loadImage("glass.png");

        World.add(world,this.body);
    }
    display(){
        if(this.body.speed<3){
        var pos=this.body.position;
        var angle=this.body.agle;

        push()
        rectMode(CENTER);
        rotate(angle);
        imageMode(CENTER);
        
        //rect(pos.x,pos.y,30,40);
        image(this.image,pos.x,pos.y,30,40);
        pop();

        }else{
            World.remove(world,this.body);
        }
    }
}