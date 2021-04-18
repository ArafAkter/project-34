class Bird {
  constructor(x, y) {
    var options = {
'restitution' : 0.5,
'friction' : 0.1,
'density' : 3
}
this.image = loadImage("sprites/bird.png");
    this.body = Bodies.circle(x, y, 25, options);
    this.width = 50;
    this.height = 50;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
   
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill("silver");
    stroke("black")
    strokeWeight(4)
  //  ellipse(0, 0, this.width , this.height );
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
   //regularPolygon(0, 0, 14, 50);
    pop();
  }
};

