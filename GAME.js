class GAME {

   constructor(){

     this.button = createButton('NEXT');
     this.readBUTTON = createButton('READ THE BOOK');
     this.gameBUTTON = createButton('PLAY');
     this.CalendulaButton = createButton('CALENDULA');
     this.SunflowerButton = createButton('SUNFLOWER');
     this.TomatoButton = createButton('TOMATO');
     this.LemongrassButton = createButton('LEMONGRASS');
     this.MarigoldButton = createButton('MARIGOLD');
     this.BasilButton = createButton('BASIL');
     this.LavenderButton = createButton('LAVENDER');
     this.impButton = createButton('BACK');
     this.vipButton = createButton('RETURN TO MENU');

     this.gameC = createButton('CALENDULA SEED');
     this.W1 = createButton('SANDY SOIL & NORMAL WEATHER');
     this.W2 = createButton('CLAYEY SOIL & VERY SUNNY WEATHER');
     this.W3 = createButton('LOAMY SOIL & COOL WEATHER');
     this.W4 = createButton('SUNNY WEATHER WITH LOAMY SOIL');
     this.W5 = createButton('MODERATE SUNNY WEATHER WITH LOAMY SOIL')
     this.gameS = createButton('SUNFLOWER SEED');
     this.gameT = createButton('TOMATO SEED');
     this.gameL = createButton('LEMONGRASS SEED');
     this.gameM = createButton('MARIGOLD SEED');
     this.gameB = createButton('BASIL SEED');
     this.gameLA = createButton('LAVENDER SEED');

     npk1 = 25;
     n1 = 25;
     n2 = 25;
     manure1 = 25;
     manure2 = 25;
     water1 = 50;
     water2 = 50;
     water3 = 50;
     water4 = 50;
     water5 = 50;
     water6 = 50;
     water7 = 50;
     sunflower_water = 0;

     this.waterbutton1 = createButton('WATER THE PLANT');
     this.waterbutton2 = createButton('ADD 1 WATER CAN');
     this.NPKbutton1 = createButton('USE NPK FERTILIZER');
     this.NPKbutton2 = createButton('ADD 1 NPK FERTILIZER');
     this.Nbutton1 = createButton('USE NITROGEN FERTILZER');
     this.Nbutton2 = createButton('ADD 1 NITROGEN FERTILIZER');
     this.Mbutton1 = createButton('USE MANURE');
     this.Mbutton2 = createButton('ADD 1 MANURE');

   }

   SPEECHbUBBLE = loadImage("images/SPEECH BUBBLE.png");
   GIRL_IMG = loadImage("images/GIRL_1.png")
   GIRL_IMG_2 = loadImage("images/GIRL_2.png");
   BOOKimage = loadImage("images/BOOK_IMG_1.png")
   GAMEimage = loadImage("images/LOGO.png");

   // PLANTS IMAGES

   CALENDULA_IMG = loadImage("images/CALENDULA.jpg");
   SUNFLOWER_IMG = loadImage("images/SUNFLOWER.jpg");
   TOMATO_IMG = loadImage("images/TOMATO.jpg");
   LEMONGRASS_IMG = loadImage("images/LEMONGRASS.jpeg");
   MARIGOLD_IMG = loadImage("images/MARIGOLD.jpg");
   BASIL_IMG = loadImage("images/BASIL.jpg");
   LAVENDER_IMG = loadImage("images/LAVENDER.jpg");
   refSunflora = loadImage("images/SUNFLOWER_CHART.png");
   refTomato = loadImage("images/TOMATO GROWTH.png");
   refLavender = loadImage("images/LAVENDER LIFE CYCLE.png");
   refCalendula = loadImage("images/CALENDULA LIFE CYCLE.png");

   //PLANT SEEDS
   seedCal = loadImage("images/Cal_Seed.png");
   seedSun = loadImage("images/Sun_Seed.png");
   seedTom = loadImage("images/Tom_Seed.png");
   seedLem = loadImage("images/Lem_Seed.png");
   seedMar = loadImage("images/Mar_Seed.png");
   seedBas = loadImage("images/Bas_Seed.png");
   seedLav = loadImage("images/Lav_Seed.png");

   //WEATHERS
   CW1 = loadImage("images/WEATHER1.png");
   CW2 = loadImage("images/WEATHER2.png");
   CW3 = loadImage("images/WEATHER3.png");
   CW4 = loadImage("images/WEATHER4.png");
   CW5 = loadImage("images/WEATHER5.png");
   CW6 = loadImage("images/WEATHER6.png");
   CW7 = loadImage("images/WEATHER7.png");

   //LIFE
   Life = loadImage("images/LIFE.png");

   //MANURE AND WATER
   watering = loadImage("images/WATER_CAN.png");
   manure = loadImage("images/MANURE.png");
   NPK_IMAGE = loadImage("images/FERTILIZER1.png");
   NITROGEN = loadImage("images/FERTILIZER2.png");

   // SUNFLOWER
    stage1 = loadImage("images/SUNFLOWER/SUNFLOWER0.png");
    stage2 = loadImage("images/SUNFLOWER/SUNFLOWER1.png");
    stage3 = loadImage("images/SUNFLOWER/SUNFLOWER2.png");
    stage4 = loadImage("images/SUNFLOWER/SUNFLOWER3.png");
    stage5 = loadImage("images/SUNFLOWER/SUNFLOWER4.png");
    stage6 = loadImage("images/SUNFLOWER/SUNFLOWER5.png");
    stage7 = loadImage("images/SUNFLOWER/SUNFLOWER6.png");
    stage8 = loadImage("images/SUNFLOWER/SUNFLOWER7.png");

    miniSUNFLOWER_IMG = loadImage("images/miniSUNFLOWER.png")

   hide(){
     this.button.hide();
     this.readBUTTON.hide();
     this.gameBUTTON.hide();
     this.CalendulaButton.hide();
     this.SunflowerButton.hide();
     this.TomatoButton.hide();
     this.LemongrassButton.hide();
     this.MarigoldButton.hide();
     this.BasilButton.hide();
     this.LavenderButton.hide();
     this.impButton.hide();
     this.vipButton.hide();
     this.gameC.hide();
     this.gameS.hide();
     this.gameT.hide();
     this.gameL.hide();
     this.gameM.hide();
     this.gameB.hide();
     this.gameLA.hide();
     
     this.W1.hide();
     this.W2.hide();
     this.W3.hide();
     this.W4.hide();
     this.W5.hide();
     this.waterbutton1.hide();
     this.waterbutton2.hide();
     this.NPKbutton1.hide();
     this.NPKbutton2.hide();
     this.Nbutton1.hide();
     this.Nbutton2.hide();
     this.Mbutton1.hide();
     this.Mbutton2.hide();
   }

   show(){
     this.gameBUTTON.show();
     this.readBUTTON.show();
     this.CalendulaButton.show();
     this.SunflowerButton.show();
     this.TomatoButton.show();
     this.LemongrassButton.show();
     this.MarigoldButton.show();
     this.BasilButton.show();
     this.LavenderButton.show();
     this.impButton.show();
     this.vipButton.show();
     this.gameC.show();
     this.gameS.show();
     this.gameT.show();
     this.gameL.show();
     this.gameM.show();
     this.gameB.show();
     this.gameLA.show();
     this.returnButton.show();
     this.W1.show();
     this.W2.show();
     this.W3.show();
     this.W4.show();
     this.W5.show();
     this.waterbutton1.show();
     this.waterbutton2.show();
     this.NPKbutton1.show();
     this.NPKbutton2.show();
     this.Nbutton1.show();
     this.Nbutton2.show();
     this.Mbutton1.show();
     this.Mbutton2.show();
   }

   story(){

     // GAMESTATE 0

     // TO CREATE THE GIRL SPRITE

      this.CalendulaButton.hide();
      this.SunflowerButton.hide();
      this.TomatoButton.hide();
      this.LemongrassButton.hide();
      this.MarigoldButton.hide();
      this.BasilButton.hide();
      this.LavenderButton.hide();
      this.impButton.hide();
      this.vipButton.hide();
      this.gameC.hide();
      this.gameS.hide();
      this.gameT.hide();
      this.gameL.hide();
      this.gameM.hide();
      this.gameB.hide();
      this.gameLA.hide();
      
      this.W4.hide();
      this.W1.hide();
     this.W2.hide();
     this.W3.hide();
     this.W5.hide();
     this.waterbutton1.hide();
     this.waterbutton2.hide();
     this.NPKbutton1.hide();
     this.NPKbutton2.hide();
     this.Nbutton1.hide();
     this.Nbutton2.hide();
     this.Mbutton1.hide();
     this.Mbutton2.hide();
     
     this.gameBUTTON.hide();
     this.readBUTTON.hide();

     imageMode(CENTER);
     image(this.GIRL_IMG,displayWidth - 900,displayHeight - 200,400,500);

     // TO SET THE SPEECH BUBBLE
     imageMode(CENTER);
     image(this.SPEECHbUBBLE,displayWidth/2 + 100,displayHeight/2 - 100,350,350);

     //TO GIVE THE STORY
     fill("#E65C90");
     textSize(17);
     text("I AM EMILY.I WANT TO BE A",displayWidth - 740,displayHeight - 650);
     text("BOTANIST. LAST SUMMER I GOT",displayWidth - 750,displayHeight - 630);
     text("A BAG OF SEEDS AND A BOOK",displayWidth - 760,displayHeight - 610);
     text("ABOUT GROWING PLANTS. PLEASE",displayWidth - 770, displayHeight - 590);
     text("HELP ME GROW THE DIFFERENT.",displayWidth - 770, displayHeight - 570);
     text("PLANTS. WE WILL ALSO LEARN",displayWidth - 770,displayHeight - 550);
     text("ABOUT THE PLANTS IN OUR",displayWidth - 760, displayHeight - 530);
     text("JOURNEY. CLICK THE BUTTON",displayWidth - 750,displayHeight - 510);
     text("TO CONTINUE.", displayWidth - 720,displayHeight - 490);

     // TO GIVE THE GAME NAME
     fill("#0F2E27");
     textFont("Arial");
     textSize(40);
     text("VIRTUAL GARDENER GAME", displayWidth/2 - 300, displayHeight/2 - 400);

     // TO CREATE THE BUTTON TO PROCEED
    
     this.button.position(displayWidth - 300, displayHeight - 70);
     this.button.style('background','#B5EAD7')
     this.button.size(100,50)
     this.button.mousePressed(function(){

       console.log("BUTTON IS WORKING");
       gameSTATE = 1;     
     })

   }


rules(){

  // TO HIDE THE BUTTON
  this.button.hide();
  this.vipButton.hide();
  this.CalendulaButton.hide();
this.SunflowerButton.hide();
this.TomatoButton.hide();
this.LemongrassButton.hide();
this.MarigoldButton.hide();
this.BasilButton.hide();
this.LavenderButton.hide();
this.gameC.hide();
this.gameS.hide();
this.gameT.hide();
this.gameL.hide();
this.gameM.hide();
this.gameB.hide();

this.waterbutton1.hide();
this.waterbutton2.hide();
this.NPKbutton1.hide();
this.NPKbutton2.hide();
this.Nbutton1.hide();
this.Nbutton2.hide();
this.Mbutton1.hide();
this.Mbutton2.hide();
this.W5.hide();
this.W4.hide();
this.gameLA.hide();
this.W1.hide();
     this.W2.hide();
     this.W3.hide();
  
  // TO CREATE A BOOK BUTTON

  //this.readBUTTON = createButton('READ THE BOOK');
  this.readBUTTON.show();
  this.readBUTTON.position(displayWidth -  200, displayHeight - 300);
  this.readBUTTON.style('background','#F8E1E7');
  this.readBUTTON.size(100,50);
  this.readBUTTON.mousePressed(function(){

    console.log("OPENING BOOK...");
    gameSTATE = 2

  })


  // TO SET THE SPEECH BUBBLE
  imageMode(CENTER);
  image(this.SPEECHbUBBLE,displayWidth/2 - 400,displayHeight/2 - 200,400,400);

  // TO EXPLAIN THE RULES
  textSize(13);
  fill("#E65C90")
  text("YOU WILL HAVE 2 SEEDS OF EACH PLANT. TO",displayWidth/2 - 550,displayHeight/2 - 300);
  text("GROW THEM, YOU WILL HAVE TO READ THE BOOK.",displayWidth/2 - 560, displayHeight/2 -280);
  text("IF YOU DO A MISTAKE YOU WILL LOSE ONE OF THE",displayWidth/2 - 570, displayHeight/2 - 260);
  text("SEEDS. CLICK THE PLAY BUTTON TO START PLAYING.",displayWidth/2 - 580,displayHeight/2 - 240);
  text("TO SEE THE BOOK, CLICK READ THE BOOK", displayWidth/2 - 580, displayHeight/2 - 220);
  text("BUTTON. ALL THE BEST! :-)",displayWidth/2 - 570, displayHeight/2 - 200);
  
  // TO DISPLAY THE GIRL
  imageMode(CENTER);
  image(this.GIRL_IMG_2,displayWidth - 1300,displayHeight - 200,400,500);

  // TO DISPLAY THE BOOK
  imageMode(CENTER);
  image(this.BOOKimage,displayWidth - 150,displayHeight - 450,300,300);

  //TO DISPLAY GAME
  imageMode(CENTER);
  image(this.GAMEimage,displayWidth - 750, displayHeight - 450,200,200);

  // TO CREATE GAME BUTTON
  this.gameBUTTON.show();
  this.gameBUTTON.position(displayWidth - 800,displayHeight - 300);
  this.gameBUTTON.style('background','#DFD9FC');
  this.gameBUTTON.size(100,50);
  this.gameBUTTON.mousePressed(function(){

    console.log("LOADING GAME...");
    gameSTATE = 3;

  })

  


}

firstpage(){

background("#55d9d4");
this.gameBUTTON.hide();
this.readBUTTON.hide();
this.impButton.hide();
this.vipButton.show();
this.gameC.hide();
this.gameS.hide();
this.gameT.hide();
this.gameL.hide();
this.gameM.hide();
this.gameB.hide();
this.gameLA.hide();

this.waterbutton1.hide();
this.waterbutton2.hide();
this.NPKbutton1.hide();
this.NPKbutton2.hide();
this.Nbutton1.hide();
this.Nbutton2.hide();
this.Mbutton1.hide();
this.Mbutton2.hide();
this.W4.hide();
this.W5.hide();
this.W1.hide();
     this.W2.hide();
     this.W3.hide();
this.vipButton.position(displayWidth - 200, displayHeight - 100);
this.vipButton.size(150,40);
this.vipButton.mousePressed(function(){
  gameSTATE = 1;
})
fill("black");
textSize(20)
text("PICK A PLANT",displayWidth/2 -70, displayHeight/2 - 400)
// CALENDULA, SUNFLOWER,TOMATO,LEMONGRASS, MARIGOLD, BASIL, LAVENDER

imageMode(CENTER);
image(this.CALENDULA_IMG,displayWidth/2 - 500,displayHeight/2 - 200,170,170);
image(this.SUNFLOWER_IMG,displayWidth/2,displayHeight/2 - 200,170,170);
image(this.TOMATO_IMG, displayWidth/2 + 500, displayHeight/2 - 200,170,170);
image(this.LEMONGRASS_IMG,displayWidth/2 - 500, displayHeight/2 + 70,170,170);
image(this.MARIGOLD_IMG,displayWidth/2,displayHeight/2 + 70,170,170);
image(this.BASIL_IMG,displayWidth/2 + 500, displayHeight/2 + 70,170,170);
image(this.LAVENDER_IMG,displayWidth/2,displayHeight/2 + 340,170,170);

this.CalendulaButton.show();
this.CalendulaButton.position(displayWidth/2 - 550,displayHeight/2 - 100);
this.CalendulaButton.size(100,40);
this.CalendulaButton.style('background','#F49C3F');
this.CalendulaButton.mousePressed(function(){
  gameSTATE = 21
})

this.SunflowerButton.show();
this.SunflowerButton.position(displayWidth/2 - 50,displayHeight/2 - 100);
this.SunflowerButton.size(100,40);
this.SunflowerButton.style('background','#FEE84E');
this.SunflowerButton.mousePressed(function(){
  gameSTATE = 22
})

this.TomatoButton.show();
this.TomatoButton.position(displayWidth/2 + 450,displayHeight/2 - 100);
this.TomatoButton.size(100,40);
this.TomatoButton.style('background','#D4312C');
this.TomatoButton.mousePressed(function(){
  gameSTATE = 23
})

this.LemongrassButton.show();
this.LemongrassButton.position(displayWidth/2 - 550,displayHeight/2 + 170);
this.LemongrassButton.size(100,40);
this.LemongrassButton.style('background','#75B630');
this.LemongrassButton.mousePressed(function(){
  gameSTATE = 24
})

this.MarigoldButton.show();
this.MarigoldButton.position(displayWidth/2 -50,displayHeight/2 + 170);
this.MarigoldButton.size(100,40);
this.MarigoldButton.style('background','#EF6937');
this.MarigoldButton.mousePressed(function(){
  gameSTATE = 25
})

this.BasilButton.show();
this.BasilButton.position(displayWidth/2 + 450,displayHeight/2 + 170);
this.BasilButton.size(100,40);
this.BasilButton.style('background','#DAF14A');
this.BasilButton.mousePressed(function(){
  gameSTATE = 26
})

this.LavenderButton.show();
this.LavenderButton.position(displayWidth/2 + 100,displayHeight/2 + 340);
this.LavenderButton.size(100,40);
this.LavenderButton.style('background','#B17EDF');
this.LavenderButton.mousePressed(function(){
  gameSTATE = 27
})

}

calendula(){
  background("#F49C3F")
  fill("black");
textSize(20)
text("CALENDULA",displayWidth/2 -70, displayHeight/2 - 400);
imageMode(CENTER);
image(this.CALENDULA_IMG,displayWidth/2 - 500,displayHeight/2 - 200,170,170);
textSize(17);
text("NAME : CALENDULA",displayWidth/2 - 300, displayHeight/2 - 300);
text("TYPE OF WEATHER/CLIMATE : COOL TEMPERATURES AND CAN GROW IN SUNNY OR SHADY AREAS",displayWidth/2 - 300, displayHeight/2 - 250)
text("TEMPERATURE BETWEEN 21°C TO 24°CELSIUS",displayWidth/2 - 300, displayHeight/2 - 220)
text("TYPE OF SOIL : RICH,WELL DRAINED SOIL (LOAMY SOIL)",displayWidth/2 - 300, displayHeight/2 - 170);
text("THE CALENDULA TAKES ABOUT 6-15 DAYS TO START GERMINATING AND TAKES ALMOST 45-60 DAYS",displayWidth/2 - 300, displayHeight/2 - 120);
text("TO FLOWER (TO BLOOM)",displayWidth/2 - 300, displayHeight/2 - 90);
text("CALENDULAS NEED 2 LITRES OF WATER PER WEEK & SHOULD BE REGULARLY WATERED.",displayWidth/2 - 300, displayHeight/2 - 40);
text("CALENDULAS DO NOT NEED MUCH FERTILIZERS. A LITTLE BIT CAN BE ADDED TO ENHANCE THE GROWTH",displayWidth/2 - 300, displayHeight/2 + 10)
text("THIS CHART EXPLAINS THE GROWTH OF CALENDULA",displayWidth/2 - 300, displayHeight/2 + 60);
image(this.refCalendula,displayWidth/2, displayHeight/2 + 225,displayWidth/2 - 400,displayHeight/3)
text("CALENDULA OIL HAS ANTIFUNGAL PROPERTIES.",displayWidth/2 - 300, displayHeight/2 + 380);
text("IT ALSO HEALS WOUNDS.",displayWidth/2 - 300, displayHeight/2 + 420)

this.CalendulaButton.hide();
this.SunflowerButton.hide();
this.TomatoButton.hide();
this.LemongrassButton.hide();
this.MarigoldButton.hide();
this.BasilButton.hide();
this.LavenderButton.hide();
this.vipButton.hide();
this.waterbutton1.hide();
this.waterbutton2.hide();
this.NPKbutton1.hide();
this.NPKbutton2.hide();
this.Nbutton1.hide();
this.Nbutton2.hide();
this.Mbutton1.hide();
this.Mbutton2.hide();

this.gameS.hide();
this.gameT.hide();
this.gameL.hide();
this.gameM.hide();
this.gameB.hide();
this.gameLA.hide();
this.W5.hide();
this.W4.hide();
this.W1.hide();
     this.W2.hide();
     this.W3.hide();
this.gameC.hide();
this.impButton.show();
this.impButton.position(displayWidth - 100, displayHeight - 100);
this.impButton.size(50,40);
this.impButton.mousePressed(function(){
  gameSTATE = 2;
})

}

sunflower(){
  background("#FEE84E")
  fill("black");
textSize(20)
text("SUNFLOWER",displayWidth/2 -70, displayHeight/2 - 400);
imageMode(CENTER);
image(this.SUNFLOWER_IMG,displayWidth/2 - 500,displayHeight/2 - 200,170,170);
textSize(17);
text("NAME : SUNFLOWER",displayWidth/2 - 300, displayHeight/2 - 300);
text("TYPE OF WEATHER/CLIMATE : SUNNY WEATHER & 6-8 HOURS OF EXPOSURE TO SUNLIGHT",displayWidth/2 - 300, displayHeight/2 - 250)
text("TYPE OF SOIL : FERTILE, MOIST AND WELL DRAINED (SANDY OR LOAMY SOIL)",displayWidth/2 - 300, displayHeight/2 - 200);
text("THE SUNFLOWER TAKES ABOUT 8-10 DAYS TO START GERMINATING AND TAKES ALMOST 60-80 DAYS",displayWidth/2 - 300, displayHeight/2 - 150);
text("TO FLOWER (TO BLOOM)",displayWidth/2 - 300, displayHeight/2 - 120);
text("SUNFLOWERS NEED 2 LITRES OF WATER PER WEEK AND SHOULD BE REGULARLY WATERED.",displayWidth/2 - 300, displayHeight/2 - 70);
text("SUNFLOWERS DO NOT NEED MUCH FERTILIZERS. A LITTLE BIT CAN BE ADDED TO ENHANCE THE GROWTH",displayWidth/2 - 300, displayHeight/2 - 20)
text("THIS CHART EXPLAINS THE GROWTH OF SUNFLOWER ALONG WITH A TIME-LINE",displayWidth/2 - 300, displayHeight/2 + 30);
image(this.refSunflora,displayWidth/2, displayHeight/2 + 200,displayWidth/2 - 200,displayHeight/3)
text("SUNFLOWER SEEDS ARE VERY HEALTHY. THEY ARE RICH IN VITAMIN E",displayWidth/2 - 300, displayHeight/2 + 350);
text("THEY ARE GOOD FOR SKIN AND BOOST HEART HEALTH.",displayWidth/2 - 300, displayHeight/2 + 400)

this.CalendulaButton.hide();
this.SunflowerButton.hide();
this.TomatoButton.hide();
this.LemongrassButton.hide();
this.MarigoldButton.hide();
this.BasilButton.hide();
this.LavenderButton.hide();
this.vipButton.hide();
this.waterbutton1.hide();
this.waterbutton2.hide();
this.NPKbutton1.hide();
this.NPKbutton2.hide();
this.Nbutton1.hide();
this.Nbutton2.hide();
this.Mbutton1.hide();
this.Mbutton2.hide();

this.gameS.hide();
this.gameT.hide();
this.gameL.hide();
this.gameM.hide();
this.gameB.hide();
this.W5.hide();
this.W4.hide();
this.gameLA.hide();
this.W1.hide();
     this.W2.hide();
     this.W3.hide();
this.gameC.hide();
this.impButton.show();
this.impButton.position(displayWidth - 100, displayHeight - 100);
this.impButton.size(50,40);
this.impButton.mousePressed(function(){
  gameSTATE = 2;
})


}

tomato(){
  background("#D4312C")
  fill("black");
textSize(20)
text("TOMATO",displayWidth/2 -70, displayHeight/2 - 400);
imageMode(CENTER);
image(this.TOMATO_IMG,displayWidth/2 - 500,displayHeight/2 - 200,170,170);
textSize(17);
text("NAME : TOMATO",displayWidth/2 - 300, displayHeight/2 - 300);
text("TYPE OF WEATHER/CLIMATE : MODERATE WEATHER & 6-8 HOURS OF EXPOSURE TO SUNLIGHT",displayWidth/2 - 300, displayHeight/2 - 250);
text("TEMPERATURE BETWEEN 19°- 29° CELSIUS.",displayWidth/2 - 300, displayHeight/2 - 220)
text("TYPE OF SOIL : WELL DRAINED LOAMY SOIL",displayWidth/2 - 300, displayHeight/2 - 170);
text("THE TOMATO TAKES ABOUT 8-10 DAYS TO START GERMINATING AND TAKES ALMOST 60-80 DAYS",displayWidth/2 - 300, displayHeight/2 - 120);
text("TO BEAR FRUIT",displayWidth/2 - 300, displayHeight/2 - 90);
text("TOMATOES NEED 2 LITRES OF WATER PER WEEK AND SHOULD BE REGULARLY WATERED.",displayWidth/2 - 300, displayHeight/2 - 40);
text("TOMATOES NEED NITROGEN,POTASSIUM AND PHOSPHORUS (NPK) FERTILIZERS.",displayWidth/2 - 300, displayHeight/2 + 10);
text("THEY ALSO REQUIRE MULCH ( A TYPE OF COMPOST ).",displayWidth/2 - 300, displayHeight/2 + 60);
text("BELOW IS A CHART EXPLAINING THE GROWTH OF TOMATOES.",displayWidth/2 - 300, displayHeight/2 + 110);
image(this.refTomato,displayWidth/2, displayHeight/2 + 250,displayWidth/2 - 300,displayHeight/3 - 50);
text("TOMATOES ARE VERY RICH IN VITAMIN C, VITAMIN A, VITAMIN K",displayWidth/2 - 300,displayHeight/2 + 400)

this.CalendulaButton.hide();
this.SunflowerButton.hide();
this.TomatoButton.hide();
this.LemongrassButton.hide();
this.MarigoldButton.hide();
this.BasilButton.hide();
this.LavenderButton.hide();
this.vipButton.hide();
this.waterbutton1.hide();
this.waterbutton2.hide();
this.NPKbutton1.hide();
this.NPKbutton2.hide();
this.Nbutton1.hide();
this.Nbutton2.hide();
this.Mbutton1.hide();
this.Mbutton2.hide();

this.gameS.hide();
this.gameT.hide();
this.gameL.hide();
this.gameM.hide();
this.gameB.hide();
this.W4.hide();
this.W5.hide();
this.gameLA.hide();
this.W1.hide();
     this.W2.hide();
     this.W3.hide();
this.gameC.hide();
this.impButton.show();
this.impButton.position(displayWidth - 100, displayHeight - 100);
this.impButton.size(50,40);
this.impButton.mousePressed(function(){
  gameSTATE = 2;
})


}

lemongrass(){
  background("#75B630")
  fill("black");
textSize(20)
text("LEMONGRASS",displayWidth/2 -70, displayHeight/2 - 400);
imageMode(CENTER);
image(this.LEMONGRASS_IMG,displayWidth/2 - 500,displayHeight/2 - 200,170,170);
textSize(17);
text("NAME : LEMONGRASS",displayWidth/2 - 300, displayHeight/2 - 300);
text("TYPE OF WEATHER/CLIMATE : HOT AND HUMID WEATHER & PLENTY OF EXPOSURE TO SUNLIGHT",displayWidth/2 - 300, displayHeight/2 - 250);
text("TEMPERATURE BETWEEN 21°- 29° CELSIUS.",displayWidth/2 - 300, displayHeight/2 - 220)
text("TYPE OF SOIL : WELL DRAINED LOAMY SOIL",displayWidth/2 - 300, displayHeight/2 - 170);
text("THE LEMONGRASS TAKES ABOUT 10 - 15 DAYS TO START GERMINATING AND TAKES ALMOST 70 - 90 DAYS",displayWidth/2 - 300, displayHeight/2 - 120);
text("TO GROW",displayWidth/2 - 300, displayHeight/2 - 90);
text("LEMONGRASS SHOULD BE FREQUENTLY WATERED",displayWidth/2 - 300, displayHeight/2 - 40);
text("LEMONGRASS MAINLY NEEDS  thNITROGEN FERTILIZER",displayWidth/2 - 300, displayHeight/2 + 10);
text("THEY ALSO REQUIRE A LITTLE COMPOST.",displayWidth/2 - 300, displayHeight/2 + 60);
text("LEMONGRASS TEA IS GOOD FOR HEALTH. IT TREATS COMMON FLU.",displayWidth/2 - 300,displayHeight/2 + 110)
text("IT IS ALSO GOOD FOR HAIR.LEMONGRASS OIL IS ALSO BENEFICIAL",displayWidth/2 - 300,displayHeight/2 + 160)
text("LEMONGRASS ALSO REPELS MOSQUITOS.",displayWidth/2 - 300,displayHeight/2 + 210)

this.CalendulaButton.hide();
this.SunflowerButton.hide();
this.TomatoButton.hide();
this.LemongrassButton.hide();
this.MarigoldButton.hide();
this.BasilButton.hide();
this.LavenderButton.hide();
this.vipButton.hide();
this.waterbutton1.hide();
this.waterbutton2.hide();
this.NPKbutton1.hide();
this.NPKbutton2.hide();
this.Nbutton1.hide();
this.Nbutton2.hide();
this.Mbutton1.hide();
this.Mbutton2.hide();

this.gameS.hide();
this.gameT.hide();
this.gameL.hide();
this.gameM.hide();
this.gameB.hide();
this.W4.hide();
this.W5.hide();
this.gameLA.hide();
this.W1.hide();
     this.W2.hide();
     this.W3.hide();
this.gameC.hide();
this.impButton.show();
this.impButton.position(displayWidth - 100, displayHeight - 100);
this.impButton.size(50,40);
this.impButton.mousePressed(function(){
  gameSTATE = 2;
})


}

marigold(){
  background("#EF6937")
  fill("black");
textSize(20)
text("MARIGOLD",displayWidth/2 -70, displayHeight/2 - 400);
imageMode(CENTER);
image(this.MARIGOLD_IMG,displayWidth/2 - 500,displayHeight/2 - 200,170,170);
textSize(17);
text("NAME : MARIGOLD",displayWidth/2 - 300, displayHeight/2 - 300);
text("TYPE OF WEATHER/CLIMATE : MILD HOT WEATHER & PLENTY OF EXPOSURE TO SUNLIGHT",displayWidth/2 - 300, displayHeight/2 - 250);
text("TEMPERATURE BETWEEN 18°- 23° CELSIUS.",displayWidth/2 - 300, displayHeight/2 - 220)
text("TYPE OF SOIL : WELL DRAINED LOAMY SOIL",displayWidth/2 - 300, displayHeight/2 - 170);
text("THE MARIGOLD TAKES ABOUT 7-8 DAYS TO START GERMINATING AND TAKES ALMOST 8 WEEKS",displayWidth/2 - 300, displayHeight/2 - 120);
text("TO FLOWER (TO BLOOM)",displayWidth/2 - 300, displayHeight/2 - 90);
text("MARIGOLD SHOULD BE FREQUENTLY WATERED",displayWidth/2 - 300, displayHeight/2 - 40);
text("MARIGOLD REQUIRES A LITTLE NITROGEN FERTILIZER",displayWidth/2 - 300, displayHeight/2 + 10);
text("THEY ALSO REQUIRE A LITTLE COMPOST.",displayWidth/2 - 300, displayHeight/2 + 60);
text("MARIGOLD PROMOTES SKIN HEALING AND IS GOOD FOR EYES.",displayWidth/2 - 300,displayHeight/2 + 110);
text("IT IS ALSO KEEPS AWAY MANY INSECTS AND PESTS.",displayWidth/2 - 300,displayHeight/2 + 160);

this.CalendulaButton.hide();
this.SunflowerButton.hide();
this.TomatoButton.hide();
this.LemongrassButton.hide();
this.MarigoldButton.hide();
this.BasilButton.hide();
this.LavenderButton.hide();
this.vipButton.hide();
this.gameS.hide();
this.gameT.hide();
this.gameL.hide();
this.gameM.hide();
this.gameB.hide();

this.waterbutton1.hide();
this.waterbutton2.hide();
this.NPKbutton1.hide();
this.NPKbutton2.hide();
this.Nbutton1.hide();
this.Nbutton2.hide();
this.Mbutton1.hide();
this.Mbutton2.hide();
this.W4.hide();
this.W5.hide();
this.gameLA.hide();
this.W1.hide();
     this.W2.hide();
     this.W3.hide();
this.gameC.hide();
this.impButton.show();
this.impButton.position(displayWidth - 100, displayHeight - 100);
this.impButton.size(50,40);
this.impButton.mousePressed(function(){
  gameSTATE = 2;
})


}

basil(){
  background("#DAF14A")
  fill("black");
textSize(20)
text("BASIL",displayWidth/2 -70, displayHeight/2 - 400);
imageMode(CENTER);
image(this.BASIL_IMG,displayWidth/2 - 500,displayHeight/2 - 200,170,170);
textSize(17);
text("NAME : BASIL",displayWidth/2 - 300, displayHeight/2 - 300);
text("TYPE OF WEATHER/CLIMATE : HOT AND DRY CLIMATE & PLENTY OF EXPOSURE TO SUNLIGHT",displayWidth/2 - 300, displayHeight/2 - 250);
text("TEMPERATURE BETWEEN 24°- 28° CELSIUS.",displayWidth/2 - 300, displayHeight/2 - 220)
text("TYPE OF SOIL : WELL DRAINED LOAMY SOIL",displayWidth/2 - 300, displayHeight/2 - 170);
text("BASIL TAKES ABOUT 7-10 DAYS TO START GERMINATING AND TAKES ALMOST 3-4 WEEKS",displayWidth/2 - 300, displayHeight/2 - 120);
text("TO GROW",displayWidth/2 - 300, displayHeight/2 - 90);
text("BASIL SHOULD BE FREQUENTLY WATERED",displayWidth/2 - 300, displayHeight/2 - 40);
text("BASIL NEEDS ORGANIC MATTER",displayWidth/2 - 300, displayHeight/2 + 10);
text("BASIL FIGHTS COMMON COLD AND IS ANTI-FLAMMATORY.",displayWidth/2 - 300, displayHeight/2 + 60);
text("IT IS ALSO GOOD FOR SKIN AND DETOXIFIES THE BODY.",displayWidth/2 - 300,displayHeight/2 + 110);
text("IT IS ALSO USED IN MANY DISHES.",displayWidth/2 - 300,displayHeight/2 + 160);

this.CalendulaButton.hide();
this.SunflowerButton.hide();
this.TomatoButton.hide();
this.LemongrassButton.hide();
this.MarigoldButton.hide();
this.BasilButton.hide();
this.LavenderButton.hide();
this.vipButton.hide();

this.gameS.hide();
this.gameT.hide();
this.gameL.hide();
this.gameM.hide();
this.gameB.hide();
this.waterbutton1.hide();
this.waterbutton2.hide();
this.NPKbutton1.hide();
this.NPKbutton2.hide();
this.Nbutton1.hide();
this.Nbutton2.hide();
this.Mbutton1.hide();
this.Mbutton2.hide();
this.W4.hide();
this.W5.hide();
this.gameLA.hide();
this.W1.hide();
     this.W2.hide();
     this.W3.hide();
this.gameC.hide();
this.impButton.show();
this.impButton.position(displayWidth - 100, displayHeight - 100);
this.impButton.size(50,40);
this.impButton.mousePressed(function(){
  gameSTATE = 2;
})


}

lavender(){
  background("#B17EDF")
  fill("black");
textSize(20)
text("LAVENDER",displayWidth/2 -70, displayHeight/2 - 400);
imageMode(CENTER);
image(this.LAVENDER_IMG,displayWidth/2 - 500,displayHeight/2 - 200,170,170);
textSize(17);
text("NAME : LAVENDER",displayWidth/2 - 300, displayHeight/2 - 300);
text("TYPE OF WEATHER/CLIMATE : MODERATELY DRY AND SUNNY CLIMATE WITH 6-8 HOURS OF EXPOSURE TO SUNLIGHT",displayWidth/2 - 300, displayHeight/2 - 250);
text("TEMPERATURE BETWEEN 20°- 30° CELSIUS.",displayWidth/2 - 300, displayHeight/2 - 220)
text("TYPE OF SOIL : WELL DRAINED SANDY SOIL",displayWidth/2 - 300, displayHeight/2 - 170);
text("LAVENDER TAKES ABOUT A TWO WEEKS TO START GERMINATING AND TAKES ABOUT AN YEAR",displayWidth/2 - 300, displayHeight/2 - 120);
text("TO GROW",displayWidth/2 - 300, displayHeight/2 - 90);
text("LAVENDER SHOULD BE WATERED ONLY ONCE OR TWICE A WEEK",displayWidth/2 - 300, displayHeight/2 - 40);
text("LAVENDER NEEDS A LITTLE COMPOST ",displayWidth/2 - 300, displayHeight/2 + 10);
text("HERE IS A CHART SHOWING THE LIFE CYCLE OF LAVENDER",displayWidth/2 - 300, displayHeight/2 + 60);
image(this.refLavender,displayWidth/2 + 450, displayHeight/2 + 200,displayWidth/2 - 400,displayHeight/3 - 50);
text("LAVENDER RELIEVES STRESS AND HELPS IN REJEUVENATING.",displayWidth/2 - 300, displayHeight/2 + 110);
text("IT IS USED IN AROMATHERAPHY.IT ALSO REPELS MOSQUITOS.",displayWidth/2 - 300,displayHeight/2 + 160);
text("IT IS ALSO USED IN MANY DISHES.",displayWidth/2 - 300,displayHeight/2 + 210);


this.CalendulaButton.hide();
this.SunflowerButton.hide();
this.TomatoButton.hide();
this.LemongrassButton.hide();
this.MarigoldButton.hide();
this.BasilButton.hide();
this.LavenderButton.hide();
this.vipButton.hide();
this.gameS.hide();
this.gameT.hide();
this.gameL.hide();
this.gameM.hide();
this.gameB.hide();
this.W4.hide();
this.waterbutton1.hide();
this.waterbutton2.hide();
this.NPKbutton1.hide();
this.NPKbutton2.hide();
this.Nbutton1.hide();
this.Nbutton2.hide();
this.Mbutton1.hide();
this.Mbutton2.hide();
this.gameLA.hide();
this.W5.hide();
this.W1.hide();
     this.W2.hide();
     this.W3.hide();
this.gameC.hide();
this.impButton.show();
this.impButton.position(displayWidth - 100, displayHeight - 100);
this.impButton.size(50,40);
this.impButton.mousePressed(function(){
  gameSTATE = 2;
})


}

demo(){

background("#AAD9D5");
this.gameBUTTON.hide();
this.readBUTTON.hide();
this.impButton.hide();
this.CalendulaButton.hide();
this.SunflowerButton.hide();
this.TomatoButton.hide();
this.LemongrassButton.hide();
this.MarigoldButton.hide();
this.BasilButton.hide();
this.W4.hide();
this.W5.hide();

this.waterbutton1.hide();
this.waterbutton2.hide();
this.NPKbutton1.hide();
this.NPKbutton2.hide();
this.Nbutton1.hide();
this.Nbutton2.hide();
this.Mbutton1.hide();
this.Mbutton2.hide();
this.LavenderButton.hide();
this.W1.hide();
     this.W2.hide();
     this.W3.hide();

fill("black");
textSize(20)
text("PICK A SEED",displayWidth/2 -70, displayHeight/2 - 400)
c1 = createSprite(displayWidth/2 - 380,displayHeight/2 - 300,100,100)
c1.addImage(this.seedCal);
c2 = createSprite(displayWidth/2 - 300,displayHeight/2 - 300,100,100)
c2.addImage(this.seedCal);
this.gameC.show();
this.gameC.position(displayWidth/2-400,displayHeight/2 - 260);
this.gameC.size(100,50);
this.gameC.mousePressed(function(){
  gameSTATE = 31;
})

s1 = createSprite(displayWidth/2,displayHeight/2 - 300,100,100);
s1.addImage(this.seedSun);
s2 = createSprite(displayWidth/2+80,displayHeight/2 - 300,100,100)
s2.addImage(this.seedSun);
this.gameS.show();
this.gameS.position(displayWidth/2,displayHeight/2-260);
this.gameS.size(100,50);
this.gameS.mousePressed(function(){
  gameSTATE = 32;
})

t1 = createSprite(displayWidth/2 + 300,displayHeight/2 - 300,100,100);
t1.addImage(this.seedTom);
t2 = createSprite(displayWidth/2 + 380,displayHeight/2 - 300,100,100);
t2.addImage(this.seedTom);
this.gameT.show();
this.gameT.position(displayWidth/2 + 300,displayHeight/2 - 260);
this.gameT.size(100,50);
this.gameT.mousePressed(function(){
  gameSTATE = 33;
})

l1 = createSprite(displayWidth/2 - 380,displayHeight/2-160,100,100);
l1.addImage(this.seedLem);
l2 = createSprite(displayWidth/2 - 340,displayHeight/2- 160,100,100);
l2.addImage(this.seedLem);
this.gameL.show();
this.gameL.position(displayWidth/2 - 400,displayHeight/2 -120);
this.gameL.size(100,50);
this.gameL.mousePressed(function(){
  gameSTATE = 34;
})

m1 = createSprite(displayWidth/2+20,displayHeight/2 - 160,100,100);
m1.addImage(this.seedMar);
m2 = createSprite(displayWidth/2 + 60,displayHeight/2 -160,100,100);
m2.addImage(this.seedMar);
this.gameM.show();
this.gameM.position(displayWidth/2,displayHeight/2-120);
this.gameM.size(100,50);
this.gameM.mousePressed(function(){
  gameSTATE = 35;
})

b1 = createSprite(displayWidth/2 + 300,displayHeight/2 - 160,100,100);
b1.addImage(this.seedBas);
b2 = createSprite(displayWidth/2 + 380,displayHeight/2 - 160,100,100);
b2.addImage(this.seedBas);
this.gameB.show();
this.gameB.position(displayWidth/2 + 300,displayHeight/2 -120);
this.gameB.size(100,50);
this.gameB.mousePressed(function(){
  gameSTATE = 36;
})

la1 = createSprite(displayWidth/2+20,displayHeight/2 - 40);
la1.addImage(this.seedLav);
la2 = createSprite(displayWidth/2+60,displayHeight/2 - 40);
la2.addImage(this.seedLav);
this.gameLA.show();
this.gameLA.position(displayWidth/2,displayHeight/2);
this.gameLA.size(100,50);
this.gameLA.mousePressed(function(){
  gameSTATE = 37;
})


drawSprites();

this.vipButton.show();
this.vipButton.position(displayWidth - 200, displayHeight - 100);
this.vipButton.size(150,40);
this.vipButton.mousePressed(()=>{
  gameSTATE = 1;
  this.W1.style('background','#E5E5E5');
  this.W2.style('background','#E5E5E5');
  this.W3.style('background','#E5E5E5');
  this.W4.style('background','#E5E5E5');
  this.W5.style('background','#E5E5E5');
})


}

gameCAL(weather1){

     this.gameC.hide();
     this.gameS.hide();
     this.gameT.hide();
     this.gameL.hide();
     this.gameM.hide();
     this.gameB.hide();
     this.gameLA.hide();
     
     this.W1.show();
     this.W2.show();
     this.W3.show();
     this.W4.hide();
     this.W5.hide();
     this.waterbutton1.hide();
     this.waterbutton2.hide();
     this.NPKbutton1.hide();
     this.NPKbutton2.hide();
     this.Nbutton1.hide();
     this.Nbutton2.hide();
     this.Mbutton1.hide();
     this.Mbutton2.hide();
     this.W1.position(displayWidth/2 - 550,displayHeight/2 + 100);
     this.W1.mousePressed(()=>{
       this.W1.style('background','#ED3835')
     })
     this.W2.position(displayWidth/2 -50,displayHeight/2 + 100); 
     this.W2.mousePressed(()=>{
      this.W2.style('background','#ED3835')
    })
     this.W3.position(displayWidth/2 + 450,displayHeight/2 + 100);
     this.W3.mousePressed(()=>{

     gameSTATE = 311

     })
     this.W1.size(100,100);
     this.W2.size(100,100);
     this.W3.size(100,100);
     background("#B5B7E6");
    imageMode(CENTER);
    image(this.CW2,displayWidth/2 - 500,displayHeight/2,100,100);
    image(this.CW1,displayWidth/2,displayHeight/2,100,100);
    image(this.CW3,displayWidth/2 + 500,displayHeight/2,100,100);
    textSize(17);
    text("READ ABOUT CALENDULA IN THE BOOK AND ANSWER THE QUESTION",displayWidth/2-300,displayHeight/2 - 300);
    text("WHAT TYPE OF WEATHER AND SOIL DOES CALENDULA GROW IN ?",displayWidth/2-300,displayHeight/2 - 200);




  }

gameSUN(weather2){
  this.gameC.hide();
  this.gameS.hide();
  this.gameT.hide();
  this.gameL.hide();
  this.gameM.hide();
  this.gameB.hide();
  this.gameLA.hide();

  background("#B5B7E6");
  imageMode(CENTER)
    var x = displayWidth/2 - 300;
  
    for(var i =0; i<lives; i++){
      image(life2,x,displayHeight/2 - 400,100,100);
      x = x+50;
    }
  
  this.W4.show();
  this.W2.hide();
  this.W3.show();
  this.W5.hide();
  this.W1.show();
  this.waterbutton1.hide();
  this.waterbutton2.hide();
  this.NPKbutton1.hide();
  this.NPKbutton2.hide();
  this.Nbutton1.hide();
  this.Nbutton2.hide();
  this.Mbutton1.hide();
  this.Mbutton2.hide();
  this.W1.position(displayWidth/2 - 550,displayHeight/2 + 100);
  this.W1.mousePressed(()=>{
    this.W1.style('background','red');
    lives -=1
  })
  this.W4.position(displayWidth/2 -50,displayHeight/2 + 100); 
  this.W4.mousePressed(()=>{
    gameSTATE = 321
    lives +=1
  })
  this.W3.position(displayWidth/2 + 450,displayHeight/2 + 100);
  this.W3.mousePressed(()=>{
    this.W3.style('background','red');
    lives -=1
  })
  this.W1.size(100,100);
  this.W4.size(100,100);
  this.W3.size(100,100);

    image(this.CW1,displayWidth/2 - 500,displayHeight/2,100,100);
    image(this.CW6,displayWidth/2,displayHeight/2,100,100);
    image(this.CW3,displayWidth/2 + 500,displayHeight/2,100,100);
    textSize(17);
    text("READ ABOUT SUNFLOWER IN THE BOOK AND ANSWER THE QUESTION",displayWidth/2-300,displayHeight/2 - 300);
    text("WHAT TYPE OF WEATHER AND SOIL DOES SUNFLOWER GROW IN ?",displayWidth/2-300,displayHeight/2 - 200);

}

gameTOM(weather3){
  this.gameC.hide();
  this.gameS.hide();
  this.gameT.hide();
  this.gameL.hide();
  this.gameM.hide();
  this.gameB.hide();
  this.gameLA.hide();
  
  this.W4.show();
  this.W1.show();
  this.W2.hide();
  this.W3.hide();
  this.waterbutton1.hide();
  this.waterbutton2.hide();
  this.NPKbutton1.hide();
  this.NPKbutton2.hide();
  this.Nbutton1.hide();
  this.Nbutton2.hide();
  this.Mbutton1.hide();
  this.Mbutton2.hide();
  this.W5.show();
  this.W1.position(displayWidth/2 - 550,displayHeight/2 + 100);
  this.W5.position(displayWidth/2 -50,displayHeight/2 + 100); 
  this.W4.position(displayWidth/2 + 450,displayHeight/2 + 100);
  this.W1.size(100,100);
  this.W1.mousePressed(()=>{
    this.W1.style('background','red');
  })
  this.W4.size(100,100);
  this.W4.mousePressed(()=>{
    this.W4.style('background','red');
  })
  this.W5.size(100,100);
  this.W5.mousePressed(()=>{
    gameSTATE = 331
  })
  background("#B5B7E6");
    imageMode(CENTER);
    image(this.CW1,displayWidth/2 - 500,displayHeight/2,100,100);
    image(this.CW7,displayWidth/2,displayHeight/2,100,100);
    image(this.CW3,displayWidth/2 + 500,displayHeight/2,100,100);
    textSize(17);
    text("READ ABOUT TOMATO IN THE BOOK AND ANSWER THE QUESTION",displayWidth/2-300,displayHeight/2 - 300);
    text("WHAT TYPE OF WEATHER AND SOIL DOES TOMATO GROW IN ?",displayWidth/2-300,displayHeight/2 - 200);

}

gameLEM(weather4){
  this.gameC.hide();
  this.gameS.hide();
  this.gameT.hide();
  this.gameL.hide();
  this.gameM.hide();
  this.gameB.hide();
  this.gameLA.hide();
  this.waterbutton1.hide();
  this.waterbutton2.hide();
  this.NPKbutton1.hide();
  this.NPKbutton2.hide();
  this.Nbutton1.hide();
  this.Nbutton2.hide();
  this.Mbutton1.hide();
  this.Mbutton2.hide();
  
  this.W4.show();
  this.W1.show();
  this.W2.hide();
  this.W3.show();
  this.W5.hide();
  this.W1.mousePressed(()=>{
    this.W1.style('background','red');
  })
  this.W3.size(100,100);
  this.W3.mousePressed(()=>{
    this.W3.style('background','red');
  })
  this.W4.size(100,100);
  this.W4.mousePressed(()=>{
    gameSTATE = 341
  })
  this.W1.position(displayWidth/2 - 550,displayHeight/2 + 100);
  this.W4.position(displayWidth/2 -50,displayHeight/2 + 100); 
  this.W3.position(displayWidth/2 + 450,displayHeight/2 + 100);
  this.W1.size(100,100);
  this.W4.size(100,100);
  this.W3.size(100,100);
  background("#B5B7E6");
    imageMode(CENTER);
    image(this.CW1,displayWidth/2 - 500,displayHeight/2,100,100);
    image(this.CW6,displayWidth/2,displayHeight/2,100,100);
    image(this.CW3,displayWidth/2 + 500,displayHeight/2,100,100);
    textSize(17);
    text("READ ABOUT LEMONGRASS IN THE BOOK AND ANSWER THE QUESTION",displayWidth/2-300,displayHeight/2 - 300);
    text("WHAT TYPE OF WEATHER AND SOIL DOES LEMONGRASS GROW IN ?",displayWidth/2-300,displayHeight/2 - 200);

}

gameMAR(weather5){
  this.gameC.hide();
  this.gameS.hide();
  this.gameT.hide();
  this.gameL.hide();
  this.gameM.hide();
  this.gameB.hide();
  this.gameLA.hide();
  this.waterbutton1.hide();
  this.waterbutton2.hide();
  this.NPKbutton1.hide();
  this.NPKbutton2.hide();
  this.Nbutton1.hide();
  this.Nbutton2.hide();
  this.Mbutton1.hide();
  this.Mbutton2.hide();
  
  this.W3.show();
  this.W1.show();
  this.W2.hide();
  this.W4.hide();
  this.W5.show();
  this.W1.position(displayWidth/2 - 550,displayHeight/2 + 100);
  this.W5.position(displayWidth/2 -50,displayHeight/2 + 100); 
  this.W3.position(displayWidth/2 + 450,displayHeight/2 + 100);
  this.W1.size(100,100);
  this.W3.size(100,100);
  this.W5.size(100,100);
  this.W1.mousePressed(()=>{
    this.W1.style('background','red');
  })
  this.W3.size(100,100);
  this.W3.mousePressed(()=>{
    this.W3.style('background','red');
  })
  this.W5.size(100,100);
  this.W5.mousePressed(()=>{
    gameSTATE = 351;
  })
  background("#B5B7E6");
    imageMode(CENTER);
    image(this.CW1,displayWidth/2 - 500,displayHeight/2,100,100);
    image(this.CW7,displayWidth/2,displayHeight/2,100,100);
    image(this.CW3,displayWidth/2 + 500,displayHeight/2,100,100);
    textSize(17);
    text("READ ABOUT MARIGOLD IN THE BOOK AND ANSWER THE QUESTION",displayWidth/2-300,displayHeight/2 - 300);
    text("WHAT TYPE OF WEATHER AND SOIL DOES MARIGOLD GROW IN ?",displayWidth/2-300,displayHeight/2 - 200);

}

gameBAS(weather6){
  this.gameC.hide();
  this.gameS.hide();
  this.gameT.hide();
  this.gameL.hide();
  this.gameM.hide();
  this.gameB.hide();
  this.gameLA.hide();
  this.waterbutton1.hide();
  this.waterbutton2.hide();
  this.NPKbutton1.hide();
  this.NPKbutton2.hide();
  this.Nbutton1.hide();
  this.Nbutton2.hide();
  this.Mbutton1.hide();
  this.Mbutton2.hide();
  
  this.W4.show();
  this.W1.show();
  this.W2.hide();
  this.W3.show();
  this.W5.hide();
  this.W1.mousePressed(()=>{
    this.W1.style('background','red');
  })
  this.W4.position(displayWidth/2 -50,displayHeight/2 + 100); 
  this.W4.mousePressed(()=>{
    gameSTATE = 361
  })
  this.W3.position(displayWidth/2 + 450,displayHeight/2 + 100);
  this.W3.mousePressed(()=>{
    this.W3.style('background','red');
  })
  this.W1.position(displayWidth/2 - 550,displayHeight/2 + 100);
  this.W4.position(displayWidth/2 -50,displayHeight/2 + 100); 
  this.W3.position(displayWidth/2 + 450,displayHeight/2 + 100);
  this.W1.size(100,100);
  this.W4.size(100,100);
  this.W3.size(100,100);
  background("#B5B7E6");
    imageMode(CENTER);
    image(this.CW1,displayWidth/2 - 500,displayHeight/2,100,100);
    image(this.CW6,displayWidth/2,displayHeight/2,100,100);
    image(this.CW3,displayWidth/2 + 500,displayHeight/2,100,100);
    textSize(17);
    text("READ ABOUT BASIL IN THE BOOK AND ANSWER THE QUESTION",displayWidth/2-300,displayHeight/2 - 300);
    text("WHAT TYPE OF WEATHER AND SOIL DOES BASIL GROW IN ?",displayWidth/2-300,displayHeight/2 - 200);

}
gameLAV(weather7){
  this.gameC.hide();
  this.gameS.hide();
  this.gameT.hide();
  this.gameL.hide();
  this.gameM.hide();
  this.gameB.hide();
  this.gameLA.hide();
  this.waterbutton1.hide();
  this.waterbutton2.hide();
  this.NPKbutton1.hide();
  this.NPKbutton2.hide();
  this.Nbutton1.hide();
  this.Nbutton2.hide();
  this.Mbutton1.hide();
  this.Mbutton2.hide();
  
  this.W3.show();
  this.W1.show();
  this.W2.hide();
  this.W4.hide();
  this.W5.show();
  this.W1.position(displayWidth/2 - 550,displayHeight/2 + 100);
  this.W5.position(displayWidth/2 -50,displayHeight/2 + 100); 
  this.W3.position(displayWidth/2 + 450,displayHeight/2 + 100);
  this.W1.mousePressed(()=>{
    gameSTATE = 371;
  })
  this.W5.position(displayWidth/2 -50,displayHeight/2 + 100); 
  this.W5.mousePressed(()=>{
    this.W5.style('background','red');
  })
  this.W3.position(displayWidth/2 + 450,displayHeight/2 + 100);
  this.W3.mousePressed(()=>{
    this.W3.style('background','red');
  })
  this.W1.size(100,100);
  this.W3.size(100,100);
  this.W5.size(100,100);
  background("#B5B7E6");
    imageMode(CENTER);
    image(this.CW2,displayWidth/2 - 500,displayHeight/2,100,100);
    image(this.CW7,displayWidth/2,displayHeight/2,100,100);
    image(this.CW3,displayWidth/2 + 500,displayHeight/2,100,100);
    textSize(17);
    text("READ ABOUT LAVENDER IN THE BOOK AND ANSWER THE QUESTION",displayWidth/2-300,displayHeight/2 - 300);
    text("WHAT TYPE OF WEATHER AND SOIL DOES LAVENDER GROW IN ?",displayWidth/2-300,displayHeight/2 - 200);

}

 flower1(){
  this.button.hide();
  this.readBUTTON.hide();
  this.gameBUTTON.hide();
  this.CalendulaButton.hide();
  this.SunflowerButton.hide();
  this.TomatoButton.hide();
  this.LemongrassButton.hide();
  this.MarigoldButton.hide();
  this.BasilButton.hide();
  this.LavenderButton.hide();
  this.impButton.hide();
  this.vipButton.hide();
  this.gameC.hide();
  this.gameS.hide();
  this.gameT.hide();
  this.gameL.hide();
  this.gameM.hide();
  this.gameB.hide();
  this.gameLA.hide();
  this.waterbutton1.show();
  this.waterbutton2.show();
  this.NPKbutton1.hide();
  this.NPKbutton2.hide();
  this.Nbutton1.hide();
  this.Nbutton2.hide();
  this.Mbutton1.hide();
  this.Mbutton2.hide();
  this.W1.hide();
  this.W2.hide();
  this.W3.hide();
  this.W4.hide();
  this.W5.hide();
   imageMode(CENTER);
   image(this.CW3,displayWidth/2,displayHeight/2,displayWidth,displayHeight);
   image(this.watering,displayWidth/2-600,displayHeight/2,100,100);
   textSize(30);
   text(":" + water1,displayWidth/2 - 550,displayHeight/2+25);
   this.waterbutton1.position(displayWidth/2-600,displayHeight/2+100);
   this.waterbutton1.style('font-family','Rockwell');
   this.waterbutton1.mousePressed(function(){
     if(water1 > 0){
     water1 = water1-1}
   })
   this.waterbutton2.position(displayWidth/2-600,displayHeight/2+150);
   this.waterbutton2.style('font-family','Rockwell')
   this.waterbutton2.mousePressed(function(){
     if(water1 < 50){
    water1 = water1+1}
  })
   
 }

 flower2(){
  this.button.hide();
  this.readBUTTON.hide();
  this.gameBUTTON.hide();
  this.CalendulaButton.hide();
  this.SunflowerButton.hide();
  this.TomatoButton.hide();
  this.LemongrassButton.hide();
  this.MarigoldButton.hide();
  this.BasilButton.hide();
  this.LavenderButton.hide();
  this.impButton.hide();
  this.vipButton.hide();
  this.gameC.hide();
  this.gameS.hide();
  this.gameT.hide();
  this.gameL.hide();
  this.gameM.hide();
  this.gameB.hide();
  this.gameLA.hide();
  this.W1.hide();
  this.W2.hide();
  this.W3.hide();
  this.W4.hide();
  this.W5.hide();
  this.waterbutton1.show();
  this.waterbutton2.show();
  this.NPKbutton1.hide();
  this.NPKbutton2.hide();
  this.Nbutton1.hide();
  this.Nbutton2.hide();
  this.Mbutton1.hide();
  this.Mbutton2.hide();
   imageMode(CENTER);
   image(this.stage1,displayWidth/2,displayHeight/2,displayWidth,displayHeight)
   imageMode(CENTER)
   var x = displayWidth/2 - 300;
 
   for(var i =0; i<lives; i++){
     image(life2,x,displayHeight/2 - 400,100,100);
     x = x+50;
   }
   textSize(20);
   text("YOU HAVE TO WATER 5 TIMES",displayWidth/2-200,displayHeight/2 - 400)
   this.waterbutton1.position(displayWidth/2-600,displayHeight/2+100);
   this.waterbutton1.style('font-family','Rockwell');
   this.waterbutton1.mousePressed(function(){
     if(water2 > 0){
     water2 = water2-1
     sunflower_water = sunflower_water+1}
   })
   this.waterbutton2.position(displayWidth/2-600,displayHeight/2+150);
   this.waterbutton2.style('font-family','Rockwell')
   this.waterbutton2.mousePressed(function(){
     if(water2 < 50){
    water2 = water2+1}
  })

  if(sunflower_water >= 74){
    image(this.stage8,displayWidth/2,displayHeight/2,displayWidth,displayHeight);
    text("CONGRATULATIONS !! YOU HAVE FINISHED GROWING THE SUNFLOWER",displayWidth/2-200,displayHeight/2 - 400);
    text("YOU HAVE LEARNT TO GROW THIS PLANT AND YOU CAN GROW THIS",displayWidth/2-200,displayHeight/2 - 350);
    text("PLANT AND YOU CAN GROW IT YOURSELF TO HELP THE ENVIRONMENT.",displayWidth/2-200,displayHeight/2 - 300);
    this.button.show();
    this.button.mousePressed(function(){
        gameSTATE = "SUNFLOWER_HARVEST";
    })
  }

  else if(sunflower_water >= 62){
    image(this.stage7,displayWidth/2,displayHeight/2,displayWidth,displayHeight)
    text("YOU HAVE TO WATER 12 TIMES",displayWidth/2-200,displayHeight/2 - 400)
  }

  else if(sunflower_water >= 48){
    image(this.stage6,displayWidth/2,displayHeight/2,displayWidth,displayHeight)
    text("YOU HAVE TO WATER 14 TIMES",displayWidth/2-200,displayHeight/2 - 400)
  }

  else if(sunflower_water >= 34){
    image(this.stage5,displayWidth/2,displayHeight/2,displayWidth,displayHeight)
    text("YOU HAVE TO WATER 14 TIMES",displayWidth/2-200,displayHeight/2 - 400)
  }

  else if(sunflower_water >= 22){
    image(this.stage4,displayWidth/2,displayHeight/2,displayWidth,displayHeight)
    text("YOU HAVE TO WATER 12 TIMES",displayWidth/2-200,displayHeight/2 - 400)
  }

  else if(sunflower_water >= 12){
    image(this.stage3,displayWidth/2,displayHeight/2,displayWidth,displayHeight)
    text("YOU HAVE TO WATER 10 TIMES",displayWidth/2-200,displayHeight/2 - 400)
  }

  else if(sunflower_water >= 5){
    image(this.stage2,displayWidth/2,displayHeight/2,displayWidth,displayHeight)
    text("YOU HAVE TO WATER 7 TIMES",displayWidth/2-200,displayHeight/2 - 400)
  }

  image(this.watering,displayWidth/2-600,displayHeight/2,100,100);
  textSize(30);
  text(":" + water2,displayWidth/2 - 550,displayHeight/2+25);

 }

 flower3(){
  this.button.hide();
  this.readBUTTON.hide();
  this.gameBUTTON.hide();
  this.CalendulaButton.hide();
  this.SunflowerButton.hide();
  this.TomatoButton.hide();
  this.LemongrassButton.hide();
  this.MarigoldButton.hide();
  this.BasilButton.hide();
  this.LavenderButton.hide();
  this.impButton.hide();
  this.vipButton.hide();
  this.gameC.hide();
  this.gameS.hide();
  this.gameT.hide();
  this.gameL.hide();
  this.gameM.hide();
  this.gameB.hide();
  this.gameLA.hide();
  this.W1.hide();
  this.W2.hide();
  this.W3.hide();
  this.W4.hide();
  this.W5.hide();
   imageMode(CENTER);
   image(this.CW5,displayWidth/2,displayHeight/2,displayWidth,displayHeight)

   this.waterbutton1.show();
   this.waterbutton2.show();
   this.NPKbutton1.show();
   this.NPKbutton2.show();
   this.Nbutton1.hide();
   this.Nbutton2.hide();
   this.Mbutton1.hide();
   this.Mbutton2.hide();
    imageMode(CENTER);
    image(this.watering,displayWidth/2-600,displayHeight/2,100,100);
    textSize(30);
    text(":" + water3,displayWidth/2 - 550,displayHeight/2+25);
    this.waterbutton1.position(displayWidth/2-600,displayHeight/2+100);
    this.waterbutton1.style('font-family','Rockwell');
    this.waterbutton1.mousePressed(function(){
      if(water3 > 0){
      water3 = water3-1}
    })
    this.waterbutton2.position(displayWidth/2-600,displayHeight/2+150);
    this.waterbutton2.style('font-family','Rockwell')
    this.waterbutton2.mousePressed(function(){
      if(water3 < 50){
     water3 = water3+1}
   })

   image(this.NPK_IMAGE,displayWidth/2 + 550,displayHeight/2,100,100);
   text(":" + npk1,displayWidth/2+600,displayHeight/2+25);
   this.NPKbutton1.position(displayWidth/2 + 550,displayHeight/2+100);
   this.NPKbutton1.style('font-family','Rockwell');
   this.NPKbutton1.mousePressed(function(){
     if(npk1 > 0){
       npk1 = npk1-1
     }
   })
   this.NPKbutton2.position(displayWidth/2 + 550,displayHeight/2+150);
   this.NPKbutton2.style('font-family','Rockwell');
   this.NPKbutton2.mousePressed(function(){
     if(npk1 < 25){
       npk1 = npk1+1
     }
   })
 }

 flower4(){
  this.button.hide();
  this.readBUTTON.hide();
  this.gameBUTTON.hide();
  this.CalendulaButton.hide();
  this.SunflowerButton.hide();
  this.TomatoButton.hide();
  this.LemongrassButton.hide();
  this.MarigoldButton.hide();
  this.BasilButton.hide();
  this.LavenderButton.hide();
  this.impButton.hide();
  this.vipButton.hide();
  this.gameC.hide();
  this.gameS.hide();
  this.gameT.hide();
  this.gameL.hide();
  this.gameM.hide();
  this.gameB.hide();
  this.gameLA.hide();
  this.W1.hide();
  this.W2.hide();
  this.W3.hide();
  this.W4.hide();
  this.W5.hide();
   imageMode(CENTER);
   image(this.CW6,displayWidth/2,displayHeight/2,displayWidth,displayHeight)

   this.waterbutton1.show();
   this.waterbutton2.show();
   this.NPKbutton1.hide();
   this.NPKbutton2.hide();
   this.Nbutton1.show();
   this.Nbutton2.show();
   this.Mbutton1.hide();
   this.Mbutton2.hide();
    imageMode(CENTER);
    image(this.watering,displayWidth/2-600,displayHeight/2,100,100);
    textSize(30);
    text(":" + water4,displayWidth/2 - 550,displayHeight/2+25);
    this.waterbutton1.position(displayWidth/2-600,displayHeight/2+100);
    this.waterbutton1.style('font-family','Rockwell');
    this.waterbutton1.mousePressed(function(){
      if(water4 > 0){
      water4 = water4-1}
    })
    this.waterbutton2.position(displayWidth/2-600,displayHeight/2+150);
    this.waterbutton2.style('font-family','Rockwell')
    this.waterbutton2.mousePressed(function(){
      if(water4 < 50){
     water4 = water4+1}
   })

   image(this.NITROGEN,displayWidth/2 + 550,displayHeight/2,100,100);
   text(":" + n1,displayWidth/2+600,displayHeight/2+25);
   this.Nbutton1.position(displayWidth/2 + 550,displayHeight/2+100);
   this.Nbutton1.style('font-family','Rockwell');
   this.Nbutton1.mousePressed(function(){
     if(n1 > 0){
       n1 = n1-1
     }
   })
   this.Nbutton2.position(displayWidth/2 + 550,displayHeight/2+150);
   this.Nbutton2.style('font-family','Rockwell');
   this.Nbutton2.mousePressed(function(){
     if(n1 < 25){
       n1 = n1+1
     }
   })

 }

 flower5(){
  this.button.hide();
  this.readBUTTON.hide();
  this.gameBUTTON.hide();
  this.CalendulaButton.hide();
  this.SunflowerButton.hide();
  this.TomatoButton.hide();
  this.LemongrassButton.hide();
  this.MarigoldButton.hide();
  this.BasilButton.hide();
  this.LavenderButton.hide();
  this.impButton.hide();
  this.vipButton.hide();
  this.gameC.hide();
  this.gameS.hide();
  this.gameT.hide();
  this.gameL.hide();
  this.gameM.hide();
  this.gameB.hide();
  this.gameLA.hide();
  this.W1.hide();
  this.W2.hide();
  this.W3.hide();
  this.W4.hide();
  this.W5.hide();
   imageMode(CENTER);
   image(this.CW5,displayWidth/2,displayHeight/2,displayWidth,displayHeight)

   this.waterbutton1.show();
   this.waterbutton2.show();
   this.NPKbutton1.hide();
   this.NPKbutton2.hide();
   this.Nbutton1.show();
   this.Nbutton2.show();
   this.Mbutton1.hide();
   this.Mbutton2.hide();
    imageMode(CENTER);
    image(this.watering,displayWidth/2-600,displayHeight/2,100,100);
    textSize(30);
    text(":" + water5,displayWidth/2 - 550,displayHeight/2+25);
    this.waterbutton1.position(displayWidth/2-600,displayHeight/2+100);
    this.waterbutton1.style('font-family','Rockwell');
    this.waterbutton1.mousePressed(function(){
      if(water5 > 0){
      water5 = water5-1}
    })
    this.waterbutton2.position(displayWidth/2-600,displayHeight/2+150);
    this.waterbutton2.style('font-family','Rockwell')
    this.waterbutton2.mousePressed(function(){
      if(water5 < 50){
     water5 = water5+1}
   })

   image(this.NITROGEN,displayWidth/2 + 550,displayHeight/2,100,100);
   text(":" + n2,displayWidth/2+600,displayHeight/2+25);
   this.Nbutton1.position(displayWidth/2 + 550,displayHeight/2+100);
   this.Nbutton1.style('font-family','Rockwell');
   this.Nbutton1.mousePressed(function(){
     if(n2 > 0){
       n2 = n2-1
     }
   })
   this.Nbutton2.position(displayWidth/2 + 550,displayHeight/2+150);
   this.Nbutton2.style('font-family','Rockwell');
   this.Nbutton2.mousePressed(function(){
     if(n2 < 25){
       n2 = n2+1
     }
   })

 }

 flower6(){
  this.button.hide();
  this.readBUTTON.hide();
  this.gameBUTTON.hide();
  this.CalendulaButton.hide();
  this.SunflowerButton.hide();
  this.TomatoButton.hide();
  this.LemongrassButton.hide();
  this.MarigoldButton.hide();
  this.BasilButton.hide();
  this.LavenderButton.hide();
  this.impButton.hide();
  this.vipButton.hide();
  this.gameC.hide();
  this.gameS.hide();
  this.gameT.hide();
  this.gameL.hide();
  this.gameM.hide();
  this.gameB.hide();
  this.gameLA.hide();
  this.W1.hide();
  this.W2.hide();
  this.W3.hide();
  this.W4.hide();
  this.W5.hide();
   imageMode(CENTER);
   image(this.CW6,displayWidth/2,displayHeight/2,displayWidth,displayHeight);

   this.waterbutton1.show();
   this.waterbutton2.show();
   this.NPKbutton1.hide();
   this.NPKbutton2.hide();
   this.Nbutton1.hide();
   this.Nbutton2.hide();
   this.Mbutton1.show();
   this.Mbutton2.show();
    imageMode(CENTER);
    image(this.watering,displayWidth/2-600,displayHeight/2,100,100);
    textSize(30);
    text(":" + water6,displayWidth/2 - 550,displayHeight/2+25);
    this.waterbutton1.position(displayWidth/2-600,displayHeight/2+100);
    this.waterbutton1.style('font-family','Rockwell');
    this.waterbutton1.mousePressed(function(){
      if(water6 > 0){
      water6 = water6-1}
    })
    this.waterbutton2.position(displayWidth/2-600,displayHeight/2+150);
    this.waterbutton2.style('font-family','Rockwell')
    this.waterbutton2.mousePressed(function(){
      if(water6 < 50){
     water6 = water6+1}
   })

   image(this.manure,displayWidth/2 + 550,displayHeight/2,100,100);
   text(":" + manure1,displayWidth/2+600,displayHeight/2+25);
   this.Mbutton1.position(displayWidth/2 + 550,displayHeight/2+100);
   this.Mbutton1.style('font-family','Rockwell');
   this.Mbutton1.mousePressed(function(){
     if(manure1 > 0){
       manure1 = manure1-1
     }
   })
   this.Mbutton2.position(displayWidth/2 + 550,displayHeight/2+150);
   this.Mbutton2.style('font-family','Rockwell');
   this.Mbutton2.mousePressed(function(){
     if(manure1 < 25){
       manure1 = manure1+1
     }
   })

   
 }

 flower7(){
  this.button.hide();
  this.readBUTTON.hide();
  this.gameBUTTON.hide();
  this.CalendulaButton.hide();
  this.SunflowerButton.hide();
  this.TomatoButton.hide();
  this.LemongrassButton.hide();
  this.MarigoldButton.hide();
  this.BasilButton.hide();
  this.LavenderButton.hide();
  this.impButton.hide();
  this.vipButton.hide();
  this.gameC.hide();
  this.gameS.hide();
  this.gameT.hide();
  this.gameL.hide();
  this.gameM.hide();
  this.gameB.hide();
  this.gameLA.hide();
  this.W1.hide();
  this.W2.hide();
  this.W3.hide();
  this.W4.hide();
  this.W5.hide();
   imageMode(CENTER);
   image(this.CW2,displayWidth/2,displayHeight/2,displayWidth,displayHeight)

   this.waterbutton1.show();
   this.waterbutton2.show();
   this.NPKbutton1.hide();
   this.NPKbutton2.hide();
   this.Nbutton1.hide();
   this.Nbutton2.hide();
   this.Mbutton1.show();
   this.Mbutton2.show();
    imageMode(CENTER);
    image(this.watering,displayWidth/2-600,displayHeight/2,100,100);
    textSize(30);
    text(":" + water7,displayWidth/2 - 550,displayHeight/2+25);
    this.waterbutton1.position(displayWidth/2-600,displayHeight/2+100);
    this.waterbutton1.style('font-family','Rockwell');
    this.waterbutton1.mousePressed(function(){
      if(water7 > 0){
      water7 = water7-1}
    })
    this.waterbutton2.position(displayWidth/2-600,displayHeight/2+150);
    this.waterbutton2.style('font-family','Rockwell')
    this.waterbutton2.mousePressed(function(){
      if(water7 < 50){
     water7 = water7+1}
   })

   image(this.manure,displayWidth/2 + 550,displayHeight/2,100,100);
   text(":" + manure2,displayWidth/2+600,displayHeight/2+25);
   this.Mbutton1.position(displayWidth/2 + 550,displayHeight/2+100);
   this.Mbutton1.style('font-family','Rockwell');
   this.Mbutton1.mousePressed(function(){
     if(manure2 > 0){
       manure2 = manure2-1
     }
   })
   this.Mbutton2.position(displayWidth/2 + 550,displayHeight/2+150);
   this.Mbutton2.style('font-family','Rockwell');
   this.Mbutton2.mousePressed(function(){
     if(manure2 < 25){
       manure2 = manure2+1
     }
   })

 }

 SUNFLOWER_HARVESTING(){
  background("pink")
  imageMode(CENTER);
  image(this.miniSUNFLOWER_IMG,displayWidth/2 - 400,displayHeight/2-400,100,100);
  textSize(38);
  text(":" + sunflowers,displayWidth/2 - 350,displayHeight/2 - 400);
  this.hide();

 }

}

