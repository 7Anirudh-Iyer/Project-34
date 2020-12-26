class Hold{
    constructor(x,y){
        var a={
            isStatic: true
        }
        this.body=Matter.Bodies.rectangle(x,y,windowWidth/7,windowHeight/200,a)
        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position
        push()
        fill("orange")
        rectMode(CENTER)
        rect(pos.x,pos.y,windowWidth/5/6,windowHeight/100)
    }
}