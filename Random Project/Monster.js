class Monster{
    constructor(x,y,width,height){
        var options = {isStatic: false}
            this.body = Bodies.rectangle(x,y,width,50/*height*/, options)
            World.add(world,this.body);
            this.width = width;
            //this.height = height;

            this.rotation = 180;

           // this.image = loadAnimation("Back.png","Together.png","rrr.png", "Front.png");
            this.image2 = loadAnimation("Back2.png", "Together2.png", "rrr2.png", "Front2.png");
            this.dino = createSprite(100,200,0,0);
            this.dino.scale = 0.29;
            this.dino.addAnimation("walking2", this.image2);
           // this.dino.addAnimation("walking", this.image);
           // this.dino.addAnimation("walking2", this.image2);
        }
        display(){
            push();
            /*translate(this.body.position.x, this.body.position.y);
            rotate(this.body.angle);
            rectMode(CENTER);
            fill("red")
            rect(0,0,this.width, this.height);
            imageMode(CENTER);*/
            this.dino.x = this.body.position.x;
            this.dino.y = this.body.position.y;
            //this.body.velocity.x = 0.0009
            
            //image(this.image, 0,0, 55,55);
            //pop();
            /*if(this.body.position.x<1144===false){
                Matter.Body.applyForce(monster1.body, monster1.body.position, {x:-0.00009,y:0});
            }

            /*if(this.body.position.x>=1344){
                Matter.Body.appleForce(this.body,this.body.position,{x:-0.00009, y:0});
            }*/
            
    }

}
