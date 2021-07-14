class Star{
    constructor(x,y,width,height){
        var options = {isStatic: true}
            this.body = Bodies.rectangle(x,y,55,55, options)
            World.add(world,this.body);
            this.width = width;
            this.height = height;
            this.image = loadImage("Star1.png");
        }
        display(){
            imageMode(CENTER);
            image(this.image, this.body.position.x, this.body.position.y, 55,55);
            /*rectMode(CENTER);
            fill("red")
            rect(this.body.position.x,this.body.position.y,this.width, this.height); */ 
        }
    }
