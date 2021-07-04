class Ground{

    constructor(x,y){
        var g = {isStatic : true}
        this.ground = Bodies.rectangle(x,y,1200,20, g)
        World.add(world, this.ground)
    }

    display(){
        rectMode(CENTER)
        rect(this.ground.position.x, this.ground.position.y,1200,20)
        
    }

}