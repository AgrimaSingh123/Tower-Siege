class Log{
    constructor(x,y,width,height){
        var options={
            'isStatic':true
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;

        World.add(world,this.body);
    }
    display(){
        rectMode(CENTER);
        var pos=this.body.position;
        push();
        fill('white');
        rect(pos.x,pos.y,this.width,this.height);
        pop();
    }
}