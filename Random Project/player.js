class Player{
    constructor(x,y,width,height){
        var options = {isStatic: false}
            this.body = Bodies.rectangle(x,y,width,height, options)
            World.add(world,this.body);
            this.width = width;
            this.height = height;
            this.rotation = 180;
            this.image = loadImage("Player1.png");

        }
        display(){
            push();
            translate(this.body.position.x, this.body.position.y);
            rotate(this.body.angle);
            rectMode(CENTER);
            /*fill("red")
            rect(0,0,this.width, this.height);*/
            imageMode(CENTER);
            image(this.image, 0,0, 55,55);
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
    function keyPressed () {
        if (keyCode === LEFT_ARROW) {
            Matter.Body.applyForce(js1.body, js1.body.position, {x:-0.03, y:0});
              
        } 
        if(keyCode === RIGHT_ARROW){
            Matter.Body.applyForce(js1.body, js1.body.position, {x:0.03, y:0});
      }
    }