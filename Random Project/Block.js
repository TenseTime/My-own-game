class Block{
    constructor(x,y,width,height){
        var options = {isStatic: true}
            this.body = Bodies.rectangle(x,y,width,height, options)
            World.add(world,this.body);
            this.width = width;
            this.height = height;
            this.rotation = 180;
        }
        display(){
            push();
            translate(this.body.position.x, this.body.position.y);
            rotate(this.body.angle);
            rectMode(CENTER);
            fill("red")
            rect(0,0,this.width, this.height);
            pop();
            
        }
        rot(){
            this.rotation = this.rotation+10;
            push();
            angleMode(RADIUS);
            Matter.Body.setAngle(this.body,this.rotation);
            pop(); 
        }
        ro(){
            this.rotation = this.rotation-10;
            push();
            angleMode(RADIUS);
            Matter.Body.setAngle(this.body,this.rotation);
            pop();
        }
    }
