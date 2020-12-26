class Ball{
    constructor(x,y){
        var json={
            restitution: 0.83,
            density: 5,
            friction: 0.3
        }

        this.body=Matter.Bodies.circle(x,y,20,json)
        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position
        push()
        fill("cyan")
        ellipseMode(RADIUS)
        ellipse(pos.x,pos.y,windowWidth/80)
        pop()
    }
}