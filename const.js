class Const{
    constructor(bodyA,bodyB){
        var json={
            bodyA: bodyA,
            bodyB: bodyB,
            length: 200,
            stiffness: 2
        }
        this.body=Matter.Constraint.create(json)
        World.add(world,this.body)
    }
}