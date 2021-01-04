class Stones{
    constructor(x, y,diametre) {
        var options = {
           isStatic:false,
           restitution:0,
           friction:1,
           density:3
        }
        this.body = Bodies.circle(x, y, diametre, options);
        this.diametre=diametre;
        this.image = loadImage("pics/stone.png");
        World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.diametre);
        pop();
      }
}