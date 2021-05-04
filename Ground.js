class Ground{
    constructor(){
        var options={
            'isStatic':true
        }
        this.body=Bodies.rectangle(400,290,800,10,options);

        World.add(world,this.body);
    }
    display(){
        rectMode(CENTER);
        fill("brown");
        rect(400,290,800,20);
    }
}