class PlayerArrow {
  constructor(x, y, width, height, archerAngle) {
    var options = {
      isStatic: true,
      density: 0.1
    };
    this.width = width;
    this.height = height;
    this.body = Bodies.rectangle(x, y, this.width, this.height, options);
    this.image = loadImage("./assets/arrow.png");
    this.archerAngle = archerAngle;
    this.velocity = 0;
    World.add(world, this.body);
  }

  display() {
    this.archerAngle = archer.body.angle;
    var pos = this.body.position;
    var angle = this.archerAngle + 90;

    push ();
    translate(pos.x,pos.y);
    rotate (angle);
    imageMode(CENTER);
    image (this.image,0,0,this.width,this.height);
    pop ();
  
   
  }

  shoot(){

    var newAngle = this.archerAngle + 90;
    newAngle = newAngle * (1/180);
    console.log(newAngle);
    var velocity = p5.Vector.fromAngle(newAngle);
    velocity.mult(0.5);
    Matter.Body.setStatic(this.body, false);
    Matter.Body.setVelocity(this.body, { x: velocity.x * (180 / 1), y: velocity.y * (180 / 1) });
  }
}
