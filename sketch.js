
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var girl;
var GIRL_IMG;
var gameSTATE = 0;
var gametest;
var bubble;
var sample;
var BOOKimage;
var test;
var button;
var readButton;
var gameButton;
var CalendulaButton;
var SunflowerButton;
var TomatoButton;
var LemongrassButton;
var MarigoldButton;
var BasilButton;
var LavenderButton;
var c1,c2,s1,s2,t1,t2,l1,l2,m1,m2,b1,b2,la1,la2;
var water1,water2,water3,water4,water5,water6,water7;
var npk1,n1,n2,manure1,manure2;
var sunflower_water;
var lives = 3;
var sunflowers = 5;

var seed_soil ={
  "SUNFLOWER":"SUNNY",
  "BASIL": "SUNNY",
  "LEMONGRASS":"SUNNY",
  "TOMATO":"MODERATE_SUNNY",
  "LAVENDER":"MODERATE_SUNNY",
  "MARIGOLD": "MODERATE_SUNNY",
  "CALENDULA":"COOL"
}

var engine, world;

function preload(){

backIMG = loadImage("images/BACKGROUND.jpg");
life2 = loadImage("images/LIFE.png")

}

function setup() {

   engine = Engine.create();
   world = engine.world;
   Engine.update(engine);
   gametest = new GAME();

   // TO CREATE THE CANVAS
   createCanvas(displayWidth,displayHeight);
 
}

function draw() {
   background("#BFD540"); 
  
   // GAMESTATE 0
   if(gameSTATE === 0){
     background(backIMG);
     gametest.story();

   }

   //GAMESTATE 1
   if(gameSTATE === 1){
     gametest.rules(); 
   }

   // GAMESTATE 2
      if(gameSTATE === 2){
        gametest.firstpage();
      }

   // GAMESTATE 3
      if(gameSTATE === 3){
        gametest.demo();
      }

  // BOOK STATES
      if(gameSTATE === 21){
        gametest.calendula();
      }

      else if(gameSTATE === 22){
        gametest.sunflower();
      }

      else if(gameSTATE === 23){
        gametest.tomato();
      }

      else if(gameSTATE === 24){
        gametest.lemongrass();
      }

      else if(gameSTATE === 25){
        gametest.marigold();
      }

      else if(gameSTATE === 26){
        gametest.basil();
      }

      else if (gameSTATE === 27){
        gametest.lavender();
      }

      if(gameSTATE === 31){
        gametest.gameCAL(seed_soil.calendula);
      }
      else if (gameSTATE === 32){
        gametest.gameSUN(seed_soil.sunflower);
      }
      else if(gameSTATE === 33){
        gametest.gameTOM(seed_soil.tomato);
      }
      else if(gameSTATE === 34){
        gametest.gameLEM(seed_soil.lemongrass);
      }
      else if(gameSTATE === 35){
        gametest.gameMAR(seed_soil.marigold);
      }
      else if(gameSTATE === 36){
        gametest.gameBAS(seed_soil.basil);
      }
      else if(gameSTATE === 37){
        gametest.gameLAV(seed_soil.lavender);
      }

      if(gameSTATE === 311){
        gametest.flower1();
      }

      else if(gameSTATE === 321){
        gametest.flower2();
      }

      else if(gameSTATE === 331){
        gametest.flower3();
      }

      else if(gameSTATE === 341){
        gametest.flower4();
      }

      else if(gameSTATE === 351){
        gametest.flower5();
      }

      else if(gameSTATE === 361){
        gametest.flower6();
      }

      else if(gameSTATE === 371){
        gametest.flower7();
      }

      if(gameSTATE === "SUNFLOWER_HARVEST"){
        gametest.SUNFLOWER_HARVESTING(sunflowers);
      }

}