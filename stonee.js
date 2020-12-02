class stone{
    constructor(x, y,radius){
        var options = {
            isStatic:false,
            restitution:0.8,
            friction:1.0,
            density:1.0
        }
        this.body = Bodies.cricle(x, y,radius, {options});
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        this.image = loadImage("stone.png");
   
    }
    display(){
        image(this.image,this.body.position.x,this.body.position.y,10,10);
    }
   
}