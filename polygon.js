class polygon{

    constructor(x,y){
        this.body = Bodies.rectangle(x,y,20,20)
        World.add(world, this.body)
    }

    display(){
        rectMode(CENTER)
        rect(this.body.position.x, this.body.position.y,20,20)
        
    }

}