class Paper{
  constructor(x, y,radius){
      var option={
      restitution:0.1  
      }
this.body=Bodies.circle(x, y,radius, option)
this.image= loadImage("paper.png") 
World.add(world,this.body )
this.radius=radius

  }
display(){
var angle= this.body.angle
var pos=this.body.position

push ()
fill ("red")
strokeWeight(3)
stroke("yellow")
translate (pos.x, pos.y)
imageMode(CENTER)
rotate(angle)
  image( this.image, 0, 0,this.radiusx2)
  pop ()

}
}
