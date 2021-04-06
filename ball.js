class Ball{
    constructor(x,y,radius){
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }

        this.image= loadImage("paper.png");
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.body = Bodies.circle(this.x,this.y,(this.radius-20)/2,options);
        
        

        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        angleMode(RADIANS);

        ellipseMode(RADIUS);
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill("pink");
        //ellipse(0,0,this.radius,this.radius);
        image(this.image,0,0,this.radius,this.radius);
        pop();
    }
}