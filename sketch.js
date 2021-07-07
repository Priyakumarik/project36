var dog,sadDog,happyDog;


function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
  Milk=loadImage("Image/Milk.png")
  milkImage=loadImage("Image/milkeImage.png")
}

function setup() {
  createCanvas(1000,400);
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;
}

  function      display() 
  var x=80,y=100;

 

  imagemode (CENTER)
  image(this.image,720,220,70,70)
  if(this.foodStock!=0){
  for(var i=0;i<this.foodStock;i++){
    if(i%10==0){
  x=80;
  y=y+50
    }
    image(this.image,x,y,50,50)
    x=x+30
  }
  }

{
  background(46,139,87);
  drawSprites();
}

//function to read food Stock


//function to update food stock and last fed time


//function to add food in stock
