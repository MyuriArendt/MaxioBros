class Juego extends Phaser.Scene{
	constructor(){
		super("Juego");
	}
		
preload() {
	this.load.image("tiles", "assets/TileSetV2.png");
  	this.load.tilemapTiledJSON("map", "assets/MaxioN1V2.json");
	this.load.spritesheet('iba', 'assets/IbaICamCom.png', { frameWidth: 21, frameHeight: 21 });
	this.load.spritesheet('ibaI', 'assets/IbaIdleCom.png', { frameWidth: 21, frameHeight: 21 });
	this.load.spritesheet('ibaIN', 'assets/IbaIdleComN.png', { frameWidth: 21, frameHeight: 21 });
	this.load.spritesheet('ibaIz', 'assets/IbaIzq.png', { frameWidth: 21, frameHeight: 21 });
	this.load.spritesheet('ibaB', 'assets/IbaIBrin.png', { frameWidth: 21, frameHeight: 21 });
	this.load.spritesheet('ibaBN', 'assets/IbaIBrinN.png', { frameWidth: 21, frameHeight: 21 });
	this.load.spritesheet('ibaBi', 'assets/image.png', { frameWidth: 21, frameHeight: 21 });
	this.load.spritesheet('ibaBiN', 'assets/imageN.png', { frameWidth: 21, frameHeight: 21 });
	this.load.spritesheet('Ne', 'assets/PeloNegro.png', { frameWidth: 21, frameHeight: 21 });
	this.load.spritesheet('NeI', 'assets/PeloNegroI.png', { frameWidth: 21, frameHeight: 21 });
	this.load.spritesheet('Pu', 'assets/puñito.png', { frameWidth: 16, frameHeight: 16 });
	this.load.spritesheet('Mon', 'assets/mon.png', { frameWidth: 18, frameHeight: 18 });
	this.load.spritesheet('Ene', 'assets/Enemy.png', { frameWidth: 16, frameHeight: 16 });
	this.load.spritesheet('punetazo', 'assets/IbaPunch.png', { frameWidth: 21, frameHeight: 21 });
	this.load.spritesheet('ala', 'assets/ala.png', { frameWidth: 21, frameHeight: 21 });
	this.load.spritesheet('ala2', 'assets/ala2.png', { frameWidth: 21, frameHeight: 21 });
	this.load.spritesheet('F', 'assets/fuego.png', { frameWidth: 16, frameHeight: 16 });
	
	this.load.spritesheet('casa', 'assets/edificio2.gif', { frameWidth: 48, frameHeight: 48 });
	this.load.spritesheet('Maxio', 'assets/MaxioIdle.png', { frameWidth: 24, frameHeight: 24 });
	this.load.spritesheet('MaxioI', 'assets/MaxioIdleI.png', { frameWidth: 24, frameHeight: 24 });
	this.load.spritesheet('MaxioJR', 'assets/MaxioJump.png', { frameWidth: 24, frameHeight: 24 });
	this.load.spritesheet('MaxioJL', 'assets/MaxioJumpL.png', { frameWidth: 24, frameHeight: 24 });
	this.load.spritesheet('MaxioRR', 'assets/MaxioRun1.png', { frameWidth: 24, frameHeight: 24 });
	this.load.spritesheet('MaxioRL', 'assets/MaxioRunL.png', { frameWidth: 24, frameHeight: 24 });
	this.load.spritesheet('MaxioCarIdle', 'assets/MaxioCarryIdle.png', { frameWidth: 24, frameHeight: 24 });
	this.load.spritesheet('MaxioCarIdleI', 'assets/MaxioCarryIdleI.png', { frameWidth: 24, frameHeight: 24 });
	this.load.spritesheet('MaxioCarD', 'assets/MaxioCarryMove.png', { frameWidth: 24, frameHeight: 24 });
	this.load.spritesheet('MaxioCarI', 'assets/MaxioCarryMoveI.png', { frameWidth: 24, frameHeight: 24 });
	this.load.spritesheet('esc', 'assets/escorpion.png', { frameWidth: 13, frameHeight: 8 });
	this.load.spritesheet('peso', 'assets/peso.png', { frameWidth: 10, frameHeight: 12 });
    this.load.spritesheet('blo', 'assets/cartel1.gif', { frameWidth: 16, frameHeight: 16 });
    this.load.spritesheet('blo2', 'assets/carte3.gif', { frameWidth: 16, frameHeight: 16 });
    this.load.spritesheet('bloUs', 'assets/cartel5.gif', { frameWidth: 16, frameHeight: 16 });
    this.load.spritesheet('cate', 'assets/catedral.gif', { frameWidth: 88, frameHeight: 96 });
    this.load.spritesheet('Escal', 'assets/escalera.png', { frameWidth: 24, frameHeight: 8 });
    this.load.spritesheet('Can', 'assets/cantaro.png', { frameWidth: 15, frameHeight: 16 });
    this.load.spritesheet('minerva', 'assets/minerva.gif', { frameWidth: 24, frameHeight: 48 });	
    this.load.spritesheet('tortas', 'assets/tortas.gif', { frameWidth: 40, frameHeight: 24 });	
    this.load.spritesheet('Valen', 'assets/valentina.gif', { frameWidth: 16, frameHeight: 16 });	
    this.load.spritesheet('Valen', 'assets/miniP.png', { frameWidth: 248, frameHeight: 1 });	
    this.load.spritesheet('MaxioNue', 'assets/MaxioV2.png', { frameWidth: 24, frameHeight: 24 });	
    this.load.spritesheet('MaxioNueI', 'assets/MaxioV2Iz.png', { frameWidth: 24, frameHeight: 24 });	
    this.load.spritesheet('MaxioPoder', 'assets/MaxioPower.png', { frameWidth: 24, frameHeight: 24 });	
    this.load.spritesheet('MaxioPoderIz', 'assets/MaxioPowerIz.png', { frameWidth: 24, frameHeight: 24 });	
	this.load.image('status', 'assets/status.png');
}
	
create() {
	//var player;
//cursors;
let camera;
var uno;
var unos;
var pu;
var moneda;
var monedaU;
var monedaD;
//var Poder = 1;
var P;
var enemigoU;
var Edi;
var Catedral;
var Minerva;
var TT;
var esc;
var rebote = 0;	
var reboteAux = 0;	
		
	keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);

  const map = this.make.tilemap({ key: "map" });

  const tileset = map.addTilesetImage("TileSetV2", "tiles");
   spaceBar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
   C = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.C);

  this.belowLayer = map.createStaticLayer("Capa de patrones 1", tileset, 0, 0);
  this.Layer = map.createStaticLayer("Capa de patrones 2", tileset, 0, 0);
  //const worldLayer = map.createStaticLayer("World", tileset, 0, 0);
  //const aboveLayer = map.createStaticLayer("Above Player", tileset, 0, 0);
	
  camera = this.cameras.main;
  	
  this.cursors = this.input.keyboard.createCursorKeys();
		
	
  this.belowLayer.setCollisionByProperty({ collides: true });
  this.Layer.setCollisionByProperty({ collides: true });
	
  pu = this.physics.add.group({
	  name: "puno",
	  key: 'Valen',
	  immovable: false,
	  allowGravity: true,
	  body: true,
	  setXY:{
		  x: 10,
		  y: 10
	  },
	  setVelocityX: 100,
	  //setScale: { x: 0.5, y: 0.5}
  });
	
  this.physics.add.collider(pu, this.belowLayer);
////////////////////////////////////PISO////////////////////////////////////////////////////////////////////////////
	MiniPlata = this.physics.add.group({
		key: 'esc',
		quantity: 5,
		immovable: false, 
		allowGravity: false, 
		body: true, 
		//visible: false,
		setXY: { x: 0, y: 0}
		}
	);
	//enemigo.setVelocityX(100);
    this.physics.add.collider(player, MiniPlata);
	var childMiniP = MiniPlata.getChildren();
	childMiniP[1].setPosition(36, 124);
	childMiniP[2].setPosition(player.x, player.y);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////ENEMIGOS///////////////////////////////////////////////////////////////////////////////////////
	enemigo = this.physics.add.group({
		name: "EnemigosA", 
		key: 'esc',
		quantity: 2,
		immovable: false, 
		allowGravity: true, 
		body: true, 
		setXY: { x: 110, y: 200, stepX: 52 },
		velocityX: 10
		}
	);
	//enemigo.setVelocityX(100);
    this.physics.add.collider(enemigo, this.belowLayer);
	var child = enemigo.getChildren();
	child[1].setPosition(434, 116);
	//child[2].setPosition(400, 400);
	//child[3].setVelocityY(-20);
	//console.log(child.length);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////Bloques objetos/////////////////////////////////////////////////////////////
  bloques = this.physics.add.group({
	  name: "bloques",
	  key: 'blo',
	  quantity: 2,
	  immovable: true,
	  allowGravity: false,
	  body: true,
	  visible: false,
	  setxy:{
		  x: 10,
		  y: 10
	  }
  });
	
  var childBlo = bloques.getChildren();
  childBlo[1].setPosition(1024, 40);
  childBlo[1].visible = true;
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////7
///////////////////////Bloques Monedas//////////////////////////////////////////
  bloquesM = this.physics.add.group({
	  name: "bloques",
	  key: 'blo2',
	  quantity: 10,
	  immovable: true,
	  allowGravity: false,
	  body: true,
	  setxy:{
		  x: 10,
		  y: 10
	  },
	  visible: false
  });
  var BM;
  var childBloM = bloquesM.getChildren();
  childBloM[1].setPosition(40, 80);
  childBloM[2].setPosition(832, 48);
  childBloM[3].setPosition(848, 48);
  childBloM[4].setPosition(864, 48);
  childBloM[5].setPosition(880, 48);
  childBloM[6].setPosition(1128, 184);
  childBloM[7].setPosition(1160, 184);
  childBloM[8].setPosition(1552, 56);
  for(BM = 0; BM < 9; BM++){
	  childBloM[BM].visible = true;
	  childBloM[BM].setSize(8, 16, true);
  }
////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////ESCALERAS///////////////////////////////////
  esc = this.physics.add.group({
	  name: "escalera",
	  key: 'Escal',
	  quantity: 25,
	  immovable: true,
	  allowGravity: false,
	  body: true,
	  visible: false,
	  setxy:{
		  x: 550,
		  y: 80
	  }
  });
	
  var childEsc = esc.getChildren();
  var ME;
  for(ME = 0; ME < 21; ME++){
	  childEsc[ME].visible = true;
  }
  childEsc[1].setPosition(12, 124);
  childEsc[2].setPosition(12, 132);
  childEsc[3].setPosition(12, 140);
  childEsc[4].setPosition(12, 148);
  childEsc[5].setPosition(12, 156);
  childEsc[6].setPosition(12, 164);
  childEsc[7].setPosition(12, 172);
  childEsc[8].setPosition(56, 180);
  childEsc[9].setPosition(56, 188);
  childEsc[10].setPosition(56, 196);
  childEsc[11].setPosition(56, 204);
  childEsc[12].setPosition(56, 212);
  childEsc[13].setPosition(56, 220);
	
  childEsc[14].setPosition(1052, 112);
  childEsc[15].setPosition(1052, 108);
  childEsc[16].setPosition(1052, 100);
  childEsc[17].setPosition(1052, 92);
  childEsc[18].setPosition(1052, 84);
  childEsc[19].setPosition(1052, 76);
  //childEsc[20].setPosition(1052, 120);
  
//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////MONEDAS/////////////////////////////////////////
  moneda = this.physics.add.group({
	  name: "moneda",
	  quantity: 20,
	  key: 'peso',
	  immovable: true,
	  allowGravity: false,
	  body: true,
	  visible: false,
	  setxy:{
		  x: 10,
		  y: 10
	  }
  });	
///////////////////////////////////////////////////////////////////////////////////////////
	PoderAlas = this.physics.add.group({
	  name: "Alas",
	  key: 'F',
	  immovable: false,
	  allowGravity: true,
	  body: true,
	  setXY:{
		  x: 625,
		  y: 100
	  },
  });
	
  this.physics.add.collider(PoderAlas, this.belowLayer);
  //this.physics.add.collider(PoderAlas, this.Layer);
	
  /*Edi = this.physics.add.group({
		name: "EnemigosA", 
		key: 'casa',
	    quantity: 3,
		immovable: true, 
		allowGravity: false, 
		body: true, 
		setXY: { x: 120, y: 200 }
		}
  );
	
  var childCasa = Edi.getChildren();
  childCasa[1].setPosition(120, 153);*/
	
  /*Catedral = this.physics.add.group({
		name: "Fin", 
		key: 'cate',
		immovable: true, 
		allowGravity: false, 
		body: true, 
		setXY: { x: 950, y: 160 }
		}
  );*/
	
  Minerva = this.physics.add.group({
		name: "Miner", 
		key: 'minerva',
	    quantity: 2,
		immovable: true, 
		allowGravity: false, 
		body: true, 
	    visible: false,
		setXY: { x: 2100, y: 155 }
		}
  );
   
	var childMiner = Minerva.getChildren();
    childMiner[1].setPosition(2100, 136);
    childMiner[1].visible = true;
    childMiner[1].setScale(3);
	
  /*TT = this.physics.add.group({
		name: "Tortas", 
		key: 'tortas',
		immovable: true, 
		allowGravity: false, 
		body: true, 
		setXY: { x: 416, y: 52 }
		}
  );*/
	
	
  player = this.physics.add.sprite(30, 190, 'Maxio');
  player.setBounce(0.2);
	
  this.physics.add.collider(player, bloquesM,function(player, bloquesM){
  	if(bloquesM.body.touching.down == true){
		if(bloquesM.name == ''){
			bloquesM.name = '0';
			Pun = Pun + 1;
			P.setText(Pun);
			bloquesM.setTexture('bloUs');
		}
	}
  }); 
	
	cantaro = this.physics.add.group({
		name: "Cantaro", 
		key: 'Can',
		quantity: 6,
		immovable: false, 
		allowGravity: true, 
		body: true
	});
	//enemigo.setVelocityX(100);
    this.physics.add.collider(cantaro, this.belowLayer,function(){
		if(cantaro.name == "wwww"){
		   cantaro.destroy();
		}
	});
	var childCan = cantaro.getChildren();
	childCan[0].setPosition(568, 150);
	childCan[1].setPosition(1000, 100);
	childCan[2].setPosition(1000, 140);
	childCan[3].setPosition(1666, 20);
	childCan[4].setPosition(1696, 20);
	//childCan[3].setPosition(player.x, player.y);
		
	this.physics.add.overlap(player, cantaro, function(player, cantaro){
		//if(Caux == 0){
		//	InCantaro = 1;
		/*if(CarCant == 0){
			auxCant = cantaro;
		//	Caux = 1;
		   }
		//}*/
		toque = 1;
		if(CarCant == 0){
	    	auxCant = cantaro;
		}
	});
	
		this.physics.add.collider(cantaro, cantaro);
	
	this.physics.add.overlap(player, TT, function(player){
		EnTo = 1;
	});
	
	
	//this.physics.add.collider(this.Layer, cantaro);
	
	//this.physics.add.collider(cantaro, this.Layer, function(cantaro){
		//cantaro.body.enable = false;
	    //cantaro.visible = false;
	//});
	
	this.physics.add.collider(cantaro, enemigo, function(cantaro, enemigo){
		if(!cantaro.body.onFloor()){
			auxCant = 0;
			cantaro.destroy();
			enemigo.destroy();
		}else{
			reboteAux = reboteAux + 1;
			if(reboteAux%2 == 0){
				enemigo.setVelocityX(-100);
			}else{
				enemigo.setVelocityX(100);
			}
		}
	});

  this.physics.add.collider(player, this.Layer)
  this.physics.add.collider(player, this.belowLayer, function(){
	  if(InStair == 1){
	  	InStair = 0;
	  }
  });
	
  //this.physics.add.collider(player, this.Layer);

	
	///////////////////////////////////////PUÑO///////////////////////////////////////
  this.anims.create({
  		key: 'llamas',
    	frames: this.anims.generateFrameNumbers('Pu', { start: 0, end: 2 }),
    	frameRate: 5,
    	repeat: -1
  });
////////////////////////////////////////////////////////////////////////////////////////
  this.anims.create({
  		key: 'arrojar',
    	frames: this.anims.generateFrameNumbers('MaxioCarD', { start: 2, end: 2 }),
    	frameRate: 1,
    	repeat: -1
  });
///////////////////////////////////////ATACADO///////////////////////////////////////
  this.anims.create({
  		key: 'dano',
    	frames: this.anims.generateFrameNumbers('MaxioNue', { start: 34, end: 34 }),
    	frameRate: 1,
    	repeat: -1
  });
////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////ESCALERA///////////////////////////////////////
  this.anims.create({
  		key: 'subiendo',
    	frames: this.anims.generateFrameNumbers('MaxioNue', { start: 35, end: 36 }),
    	frameRate: 3,
    	repeat: -1
  });
////////////////////////////////////////////////////////////////////////////////////////
  this.anims.create({
  		key: 'escor',
    	frames: this.anims.generateFrameNumbers('esc', { start: 0, end: 4 }),
    	frameRate: 10,
    	repeat: -1
  });
	
  this.anims.create({
  		key: 'escorD',
    	frames: this.anims.generateFrameNumbers('esc', { start: 5, end: 5 }),
    	frameRate: 10,
    	repeat: 0
  });
	
  this.anims.create({
  		key: 'Mone',
    	frames: this.anims.generateFrameNumbers('peso', { start: 0, end: 3 }),
    	frameRate: 10,
    	repeat: -1
  });
	
/////////////////////////////////CORRER DERECHA///////////////////////////////////////////
  this.anims.create({
  		key: 'right',
    	frames: this.anims.generateFrameNumbers('MaxioNue', { start: 9, end: 21 }),
    	frameRate: 5,
    	repeat: -1
   });
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////MAXIO CARGANDO DERECHA///////////////////////////////
   this.anims.create({
  		key: 'rightC',
    	frames: this.anims.generateFrameNumbers('MaxioNue', { start: 26, end: 28 }),
    	frameRate: 4,
    	repeat: -1
   });
///////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////CORRER IZQUIERDA/////////////////////////////
  this.anims.create({
  		key: 'left',
    	frames: this.anims.generateFrameNumbers('MaxioNueI', { start: 9, end: 21 }),
    	frameRate: 5,
    	repeat: -1
   });
/////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////MAXIO CORRER CARGANDO IZQUIERDA////////////////////////
   this.anims.create({
  		key: 'leftC',
    	frames: this.anims.generateFrameNumbers('MaxioNueI', { start: 26, end: 28 }),
    	frameRate: 5,
    	repeat: -1
   });
////////////////////////////////////////////////////////////////////////////
//////////////////////////////IDLE IZQUIERDA////////////////////////////////////////////////
   this.anims.create({
  		key: 'idleI',
   		frames: this.anims.generateFrameNumbers('MaxioNueI', { start: 0, end: 7 }),
    	frameRate: 2,
    	repeat: -1
   });
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////IDLE DERECHA/////////////////////////////////////////////////////////////////
	this.anims.create({
  		key: 'idle',
   		frames: this.anims.generateFrameNumbers('MaxioNue', { start: 0, end: 7 }),
    	frameRate: 2,
    	repeat: -1
   });
//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////IDLE CARGAR DERECHA///////////////////////////////////////////////////
   this.anims.create({
  		key: 'idleC',
   		frames: this.anims.generateFrameNumbers('MaxioNue', { start: 24, end: 25 }),
    	frameRate: 2,
    	repeat: -1
   });
/////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////IDLE CARGAR IZQUIERDA////////////////////////////////////////////
   this.anims.create({
  		key: 'idleCI',
   		frames: this.anims.generateFrameNumbers('MaxioNueI', { start: 24, end: 25 }),
    	frameRate: 2,
    	repeat: -1
   });
/////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////BRINCO DERECHO//////////////////////////////////////////////
   this.anims.create({
  		key: 'brinco',
   		frames: this.anims.generateFrameNumbers('MaxioNue', { start: 22, end: 23 }),
    	frameRate: 5,
    	repeat: 0
   });
/////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////BRINCO IZQUIERDO///////////////////////////////////////////
   this.anims.create({
  		key: 'brincoI',
   		frames: this.anims.generateFrameNumbers('MaxioNueI', { start: 22, end: 23 }),
    	frameRate: 5,
    	repeat: 0
   });
///////////////////////////////////////////////////////////////////////////////////////////////
	this.anims.create({
  		key: 'ataque',
   		frames: this.anims.generateFrameNumbers('punetazo', { start: 1, end: 1 }),
    	frameRate: 3,
    	repeat: -1
   });
//////////////////////////////IDLE IZQUIERDA PODER////////////////////////////////////////////////
   this.anims.create({
  		key: 'idleIPoderiz',
   		frames: this.anims.generateFrameNumbers('MaxioPoderIz', { start: 0, end: 7 }),
    	frameRate: 2,
    	repeat: -1
   });
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////IDLE DERECHA PODER/////////////////////////////////////////////////////////////////
	this.anims.create({
  		key: 'idlePoder',
   		frames: this.anims.generateFrameNumbers('MaxioPoder', { start: 0, end: 7 }),
    	frameRate: 2,
    	repeat: -1
   });
//////////////////////////////////////////////////////////////////////////////////////////////////////
	//////////////////////////////////////IDLE CARGAR DERECHA PODER///////////////////////////////////////////////////
   this.anims.create({
  		key: 'idleCPoder',
   		frames: this.anims.generateFrameNumbers('MaxioPoder', { start: 24, end: 25 }),
    	frameRate: 2,
    	repeat: -1
   });
/////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////IDLE CARGAR IZQUIERDA PODER////////////////////////////////////////////
   this.anims.create({
  		key: 'idleCIPoder',
   		frames: this.anims.generateFrameNumbers('MaxioPoderIz', { start: 24, end: 25 }),
    	frameRate: 2,
    	repeat: -1
   });
/////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////CORRER DERECHA PODER/////////////////////////////
  this.anims.create({
  		key: 'rightPoder',
    	frames: this.anims.generateFrameNumbers('MaxioPoder', { start: 9, end: 21 }),
    	frameRate: 5,
    	repeat: -1
   });
/////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////CORRER IZQUIERDa PODER/////////////////////////////
  this.anims.create({
  		key: 'leftPoder',
    	frames: this.anims.generateFrameNumbers('MaxioPoderIz', { start: 9, end: 21 }),
    	frameRate: 5,
    	repeat: -1
   });
/////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////MAXIO CORRER CARGANDO IZQUIERDA////////////////////////
   this.anims.create({
  		key: 'leftCPoder',
    	frames: this.anims.generateFrameNumbers('MaxioPoderIz', { start: 26, end: 28 }),
    	frameRate: 5,
    	repeat: -1
   });
///////////////////////////////////////////////////////////////////////////////
//////////////////////////////////MAXIO CORRER CARGANDO DERECHA////////////////////////
   this.anims.create({
  		key: 'rightCPoder',
    	frames: this.anims.generateFrameNumbers('MaxioPoder', { start: 26, end: 28 }),
    	frameRate: 5,
    	repeat: -1
   });
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////BRINCO DERECHO PODER//////////////////////////////////////////////
   this.anims.create({
  		key: 'brincoPoder',
   		frames: this.anims.generateFrameNumbers('MaxioPoder', { start: 22, end: 23 }),
    	frameRate: 5,
    	repeat: 0
   });
/////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////BRINCO IZQUIERDO PODER///////////////////////////////////////////
   this.anims.create({
  		key: 'brincoIPoder',
   		frames: this.anims.generateFrameNumbers('MaxioPoderIz', { start: 22, end: 23 }),
    	frameRate: 5,
    	repeat: 0
   });
///////////////////////////////////////////////////////////////////////////////////////////////
	
	
   alas = this.add.sprite(player.x - 10, player.y, 'ala');
   alas2 = this.add.sprite(player.x - 10, player.y, 'ala2');
	
	alas.visible = false;
	alas2.visible = false;
	
   this.cursors = this.input.keyboard.createCursorKeys();
   camera.startFollow(player);
   camera.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
	
   child[0].anims.play('escor');
   child[1].anims.play('escor');
	
   /*this.physics.add.collider(player, Edi, function(player, Edi){
   		if(player.body.touching.down){
	    }
   })*/

	
   this.physics.add.overlap(player, pu, function(player, pu){
	   pu.destroy();
	   player.setTexture('Ne');
	   //saber(Poder);
	   //Poder = true;
	   PoderA = true;
	   setTimeout(() => {
		   PoderA = false;
	   }, 2000);
   })
	
	this.physics.add.overlap(player, PoderAlas, function(player, PoderAlas){
	   PoderAlas.destroy();
	   //saber(Poder);
	   PoderA = true;
	   Poder = false;
	   setTimeout(() => {
		   PoderA = false;
	   }, 2000);
	   
   })
	
    //moned = this.add.existing(new Mone(this, 200, 200));
	
	this.physics.add.overlap(player, moneda, function(player, moneda){
	   Pun = Pun + 1;
	   P.setText(Pun);
	   moneda.destroy();
    })
	
	this.physics.add.overlap(player, esc, function(){
		if(CarCant == 0){
	    	InStair = 1;
		}
	   //player.body.allowGravity = false;
    })
	
	this.physics.add.collider(player, enemigo, function(player, enemigo){	
		
		var Des = 0;
		
		if(enemigo.body.touching.up){
			player.setVelocityY(-180);
			Des = 1;
			Pun = Pun + 100;
			P.setText(Pun);
			enemigo.anims.play('escorD', true);
		}
		
		if(enemigo.body.touching.left && atacado == 0 || enemigo.body.touching.right && atacado == 0){
			//if(Poder == true || PoderA == true){
				//Poder = false;
				//PoderA = false;
			atacado = 1;
			PuntosVida = PuntosVida - 1;
			if(dir == 0){
				player.setVelocityX(-200);
				player.setVelocityY(-100);
			}else{
				player.setVelocityX(200);
				player.setVelocityY(-100);
			}
			//console.log(PuntosVida);
			setTimeout(() => {
				atacado = 0;
			},1000);
			//}else{
				//muerte = true;
			//}
		}
		
		if(Des == 1){
			//enemigo.flipY = true;
			enemigo.setVelocityX(0);	
			enemigo.body.enable = false;
			setTimeout(() => {
				enemigo.destroy();
			},1500);
		}
		
		//player.setVelocityX(Math.floor((Math.random() * 300) + 200));
   })
   this.physics.add.collider(cantaro, bloques);
	
   this.physics.add.collider(player, bloques, function(player, bloques){
	   if(bloques.body.touching.down){
		   if(usado == 0){
				console.log("A");
				bloques.setTexture('bloUs');
				pu = pu.create(bloques.x + 16, bloques.y - 16 ,'Valen')
				pu.setVelocityX(40);
				//bloques.body.enable = false;
			    usado = 1;
		   }
	   }
	   if(bloques.body.touching.down){
	   		bloques.setTexture('bloUs');
   	   }
   });
		
	this.physics.add.collider(enemigo, this.Layer, function(enem){
		rebote = rebote + 1;
		if(rebote%2 == 0){
			enem.setVelocityX(-100);
			enem.flipX = true;
		}else{
			enem.setVelocityX(100);
			enem.flipX = false;
		}
   });
	
//////////////////////////////////MONEDAS//////////////////////////////////////////
  var childMon = moneda.getChildren();
  childMon[1].setPosition(80, 144);
  childMon[2].setPosition(96, 128);
  childMon[3].setPosition(118, 128);
  childMon[4].setPosition(134, 144);
  childMon[5].setPosition(350, 172);
  childMon[6].setPosition(378, 172);
  childMon[7].setPosition(434, 100);
  childMon[8].setPosition(466, 100);
  childMon[9].setPosition(1358, 160);
  childMon[10].setPosition(1374, 144);
  childMon[11].setPosition(1390, 160);
  childMon[12].setPosition(1666, 162);
  childMon[13].setPosition(1627, 175);
  childMon[14].setPosition(1699, 175);
  childMon[15].setPosition(1645, 195);
  childMon[16].setPosition(1683, 195);
  var MoCh;
  for(MoCh = 0; MoCh < 17; MoCh++){
	  childMon[MoCh].visible = true;
	  childMon[MoCh].anims.play('Mone');
	  
  }
/////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////TEXTOS//////////////////////////////////////////
	var St = {
        	key: 'status',
        	x: 120,
			y: 16,
			//scale: 2
        };
	
    this.make.image(St).setScrollFactor(0, 0);
	
	var Tor = this.add.text(440, 35, "TORTAS!!!!!!",{ 
			fontSize: '10px', 
			fill: '#000',
			align: 'center'
		});
	
  var J = this.add.text(5, 3, "Puntos - ",{ 
			fontSize: '10px', 
			//fill: '#000',
			align: 'center',
	  		color: '#FFFFFF'
		});
	
  J.setScrollFactor(0, 0);

  var P = this.add.text(55, 3, Pun,{ 
			fontSize: '10px', 
			//fill: '#000',
			align: 'center',
	  		color: '#FFFFFF'	  
		});
	
  P.setScrollFactor(0, 0);
	
	var A = this.add.text(5, 12, "Vidas: ",{ 
			fontSize: '10px', 
			//fill: '#000',
			align: 'center',
			color: '#FFFFFF'	  
		});
	
  A.setScrollFactor(0, 0);

	var B = this.add.text(55, 12, vidas,{ 
			fontSize: '10px', 
			//fill: '#000',
			align: 'center',
			color: '#FFFFFF'	  
		});
	
  B.setScrollFactor(0, 0);
///////////////////////////////////////////////////////////////////////////
}

update(time, delta) {
	fuera(this);
	Muer(this);
	cargar();
	textoT();
	//estar();
	CantaroInP();
	if(PuntosVida == 0){
		muerte = true;
	}
	
	if(atacado == 1){
		player.anims.play('dano', true);
	}
	
	if(atacando == 1){
		player.anims.play('arrojar', true);
	}
		   
	if(player.body.touching.none){
		InStair = 0;
		//InCantaro = 0;
		//player.anims.play('idle', true);
		///auxCant = 0;
	}else{
		//toque = 1;
	}
	
	
	
	if(player.body.touching.up == false && 
	   player.body.touching.left == false && 
	   player.body.touching.right == false){
		toque = 0;	   
	}
	
	if(player.body.velocity.x == 0 && player.body.onFloor() && atacado == 0 && atacando == 0|| 
	  (player.body.velocity.x == 0 && player.body.touching.down == true && atacado == 0 && atacando == 0)){
		if(CarCant == 0){
			if(dir == 0){
				if(PoderA == false){
					player.anims.play('idle', true);
				}else{
					player.anims.play('idlePoder', true);
				}
			}else{
				if(PoderA == false){
					player.anims.play('idleI', true);
				}else{
					player.anims.play('idleIPoderiz', true);
				}
			}
		}
		
		if(CarCant == 1){
			if(dir == 0){
				if(PoderA == 0){
					player.anims.play('idleC', true);
				}else{
					player.anims.play('idleCPoder', true);					
				}
			}else{
				if(PoderA == 0){
					player.anims.play('idleCI', true);
				}else{
				    player.anims.play('idleCIPoder', true);
				}
			}
		}
	}
		
	if (this.cursors.left.isDown && atacado == 0){
			dir = 1;
            player.setVelocityX(-160);
			if(player.body.onFloor() || player.body.touching.down){
            	if(CarCant == 0){
					if(PoderA == 0){
						player.anims.play('left', true);
					}else{
						player.anims.play('leftPoder', true);
					}
				}
				if(CarCant == 1){
					if(PoderA == 0){
						player.anims.play('leftC', true);
					}else{
						player.anims.play('leftCPoder', true);						
					}
				}
			}
     }
        else if (this.cursors.right.isDown && atacado == 0){
			dir = 0;
			player.setVelocityX(160);
			if(player.body.onFloor() || player.body.touching.down){
				if(CarCant == 0){
					if(PoderA == 0){
						player.anims.play('right', true);
					}else{
						player.anims.play('rightPoder', true);
					}
				}
				if(CarCant == 1){
					if(PoderA == 0){
						player.anims.play('rightC', true);
					}else{
						player.anims.play('rightCPoder', true);						
					}
				}
		    }
        }
        else{
            player.setVelocityX(0);
        }
	
	    if(InStair == 1){
			player.anims.play('subiendo', true);
			if (this.cursors.up.isDown)
			{
				player.setVelocityY(-160);
			}else if(this.cursors.down.isDown){
				player.setVelocityY(160);
			}else{
				player.setVelocityY(-5.25);
			}
		}
		
        if ((this.cursors.up.isDown && player.body.onFloor()) && atacado == 0 || 
			(this.cursors.up.isDown && player.body.touching.down == true && atacado == 0))
        {
			player.setVelocityY(-180);
			if(dir == 0){
				if(PoderA == 0){
					player.anims.play('brinco', true);
				}else{
				    player.anims.play('brincoPoder', true);
				}
			}
			else{
				if(PoderA == 0){
					player.anims.play('brincoI', true);
				}else{
					player.anims.play('brincoIPoder', true);
				}
			}
        }
	
		if(this.cursors.down.isDown && toque == 1){
			if(CarCant == 0){
				CarCant = 1;
				//auxCant.name = "wwww";
			}
		}
	
	if(player.x > 2200){
			IsN = 1;
	   	   this.scene.start("Periodico");
	   }
	if(Phaser.Input.Keyboard.JustDown(spaceBar)){
			console.log("ssssssssssss");
			if(CarCant == 1){
				atacando = 1;
				arrojar();
				setTimeout(() => {
					atacando = 0;
				}, 200);
				CarCant = 0;				
			}
		
			
			//player.anims.stop();
			//player.anims.play('ataque', true);
		if(PoderA == true && CarCant == 0){
	    	abc = this.add.existing(new Mone(this, player.x + 10, player.y + 10));
			abc.anims.play('llamas', true);
			this.physics.add.collider(abc, this.belowLayer);
			this.physics.add.collider(abc, this.Layer);
		
			this.physics.add.collider(abc, enemigo, function(player, ene){

				//enemigo.killAndHide(enemigo);
				ene.visible = false;
				ene.body.enable = false;
				abc.destroy();
		   	});
		}
	}
	
	/*if(spaceBar.isDown && PoderA == true){
		console.log("especio");
		alas.visible = true;
		alas2.visible = true;
		alas.setPosition(player.x + 30, player.y - 10);
		alas2.setPosition(player.x - 30, player.y - 10);
	    player.anims.play('brincoI', true);
		player.body.allowGravity = false;
	}else{
		player.body.allowGravity = true;
		alas.visible = false;
		alas2.visible = false;
		//alas2.destroy();
	}*/
	
	if(keyA.isDown){
		if(toque == 1 && CarCant == 0){
			if(dir == 1){
				auxCant.setVelocityX(-160);
			}else{
				auxCant.setVelocityX(160);				
			}
		}
	}	
}	
}