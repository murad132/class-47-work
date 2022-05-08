var check;

var tilesGroup;
var player
var p1, p2, p3, p4, p5, p6;
var e1,e2,e3,eking
var eflag
var eflagIMG
var flag



function setup(){
  createCanvas(1240, 740);
 
  eflagIMG = loadImage("./libraries-main/R.jpg");

  check = createSprite(150, 150, 20, 20);
  check.shapeColor="red";
  check.depth = 2;

  p1 = createSprite(200, 150, 20, 20);
  p1.shapeColor="white";
  p1.depth =2;

  p2 = createSprite(250, 150, 20, 20);
  p2.shapeColor="white";
  p2.depth =2;

  p3 = createSprite(150, 200, 20, 20);
  p3.shapeColor="white";
  p3.depth =2;

  p4 = createSprite(150, 250, 20, 20);
  p4.shapeColor="white";
  p4.depth =2;
  
  flag = createSprite(100, 335, 20, 110);
  flag.shapeColor="red";
  flag.depth =2;

  eflag = createSprite(1090, 335, 20, 110);
  eflag.shapeColor="green";
  eflag.depth =2;
  
  eking = createSprite(1035,515, 20, 20);
  eking.shapeColor="green";
  eking.depth =2;

  e1 = createSprite(985,515, 20, 20);
  e1.shapeColor="black";
  e1.depth =2;

  e2 = createSprite(935,515, 20, 20);
  e2.shapeColor="black";
  e2.depth =2;
  
  e3 = createSprite(1035,465, 20, 20);
  e3.shapeColor="black";
  e3.depth =2;

  e4 = createSprite(1035,415, 20, 20);
  e4.shapeColor="black";
  e4.depth =2;
  
  

}

function draw(){
  background("black");

  
  if(mousePressedOver(check)){
    console.log("Working!!");
    check.shapeColor = "red"
  }

  createTiles()
  drawSprites();
  loadImage();
}

function createTiles(){
  for(var j =0; j<10; j++){
    // j --> column
    for(var i =0; i<20; i++){
      // i -->  row
      var tile = createSprite(100+(i*52), 100+(j*52), 50, 50);
      tile.depth =1;

    }
  }
}

