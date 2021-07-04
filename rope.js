class Rope{
    constructor(body1, p2){

        var r = {bodyA:body1 , pointB:p2 , length:30 , stiffness:0.1}
        this.body=Matter.Constraint.create(r)
        World.add(world, this.body)
        this.something=p2
    }


display(){
    if(this.body.bodyA){
    line(this.body.bodyA.position.x, this.body.bodyA.position.y, this.something.x, this.something.y)
    }
}

fly(){
    this.body.bodyA=null
}

attach(b){this.body.bodyA = b}

}