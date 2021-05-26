var boy,boy_img;
var ghost,ghost_img;
var bg,bg_img;
var score=0;
var boxes,boxes_img;


function preload(){
boy_img=loadAnimation("b1.png","b2.png","b3.png","b4.png","b5.png","b6.png","b7.png","b8.png");
ghost_img=loadImage("ghost.jpg");
bg_img=loadImage("behind.png");
boxes_img=loadImage("boxes.png");
}

function setup(){
createCanvas(1000,800);


bg=createSprite(500,400,1000,800);
bg.addImage("screen",bg_img);
bg.scale=1.5;

boy=createSprite(40,750,10,10);
boy.addAnimation("hero",boy_img);


}
function draw(){
background(0);
drawSprites();
}
function boxes(){
if (frameCount%60===0) {
 var boxes=createSprite(1250,200,20,20);
 boxes.addImage("hurdle",boxes_img);   
}
}
function ghost(){

}