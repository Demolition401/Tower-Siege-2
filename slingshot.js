class Skeleton{
    constructor(body1, p2){

        var r = {bodyA:body1 , pointB:p2 , length:30 , stifness:0.1}
        this.body=Matter.Constraint.create(r)
        World.add(world, this.body)
        this.something=p2

        this.rope=loadImage("sling1.png")
        this.rope2=loadImage("sling2.png")
        this.rope3=loadImage("sling3.png")


    }


display(){
    if(this.body.bodyA){
    line(this.body.bodyA.position.x, this.body.bodyA.position.y, this.something.x, this.something.y)
    }
    image(this.rope, 200, 20)
    image(this.rope2, 170, 20)
}

fly(){
    this.body.bodyA=null
}

}