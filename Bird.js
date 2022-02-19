class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.dots=loadImage("sprites/smoke.png");
    
  this.trajectory=[]
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    if(this.body.position.x>200 && this.body.velocity.x>10){
    this.trajectory.push ([this.body.position.x,this.body.position.y])
    }
    for(var i = 0; i<this.trajectory.length; i=i+2){
    image(this.dots,this.trajectory[i][0],this.trajectory[i][1])
    }
  }
}
