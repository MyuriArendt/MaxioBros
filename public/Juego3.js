class Juego3 extends Phaser.Scene{
	constructor(){
		super("Juego3");
	}
		
preload() {
	this.load.image("tiles", "assets/TileSetMaxio.png");
  	this.load.tilemapTiledJSON("map", "assets/MaxioN1.json");
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
	this.load.spritesheet('Pu', 'assets/Punch.png', { frameWidth: 32, frameHeight: 32 });
	this.load.spritesheet('Mon', 'assets/mon.png', { frameWidth: 18, frameHeight: 18 });
	this.load.spritesheet('Ene', 'assets/Enemy.png', { frameWidth: 16, frameHeight: 16 });
	this.load.spritesheet('punetazo', 'assets/IbaPunch.png', { frameWidth: 21, frameHeight: 21 });
	this.load.spritesheet('ala', 'assets/ala.png', { frameWidth: 21, frameHeight: 21 });
	this.load.spritesheet('ala2', 'assets/ala2.png', { frameWidth: 21, frameHeight: 21 });
	this.load.spritesheet('F', 'assets/fuego.png', { frameWidth: 16, frameHeight: 16 });
	
	this.load.spritesheet('casa', 'assets/edificio2.gif', { frameWidth: 48, frameHeight: 48 });
	this.load.spritesheet('Maxio', 'assets/MaxioIdle.png', { frameWidth: 24, frameHeight: 24 });
	this.load.spritesheet('MaxioJR', 'assets/MaxioJump.png', { frameWidth: 24, frameHeight: 24 });
	this.load.spritesheet('MaxioJL', 'assets/MaxioJumpL.png', { frameWidth: 24, frameHeight: 24 });
	this.load.spritesheet('MaxioRR', 'assets/MaxioRun1.png', { frameWidth: 24, frameHeight: 24 });
	this.load.spritesheet('MaxioRL', 'assets/MaxioRunL.png', { frameWidth: 24, frameHeight: 24 });
	this.load.spritesheet('MaxioCarIdle', 'assets/MaxioCarryIdle.png', { frameWidth: 24, frameHeight: 24 });
	this.load.spritesheet('MaxioCarD', 'assets/MaxioCarryMove.png', { frameWidth: 24, frameHeight: 24 });
	this.load.spritesheet('MaxioCarI', 'assets/MaxioCarryMoveI.png', { frameWidth: 24, frameHeight: 24 });
	this.load.spritesheet('esc', 'assets/escorpion.png', { frameWidth: 13, frameHeight: 8 });
	this.load.spritesheet('peso', 'assets/peso.png', { frameWidth: 10, frameHeight: 12 });
    this.load.spritesheet('blo', 'assets/cartel1.gif', { frameWidth: 16, frameHeight: 16 });
    this.load.spritesheet('bloUs', 'assets/cartel5.gif', { frameWidth: 16, frameHeight: 16 });
    this.load.spritesheet('cate', 'assets/catedral.gif', { frameWidth: 88, frameHeight: 96 });
    this.load.spritesheet('Escal', 'assets/escalera.png', { frameWidth: 16, frameHeight: 16 });
    this.load.spritesheet('Can', 'assets/cantaro.png', { frameWidth: 15, frameHeight: 16 });
}
	
create() {
	//var player;
//cursors;
let camera;
var bloques;
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
var esc;
var cantaro;
var rebote = 0;	
		
  const map = this.make.tilemap({ key: "map" });

  const tileset = map.addTilesetImage("TileSetMaxio", "tiles");
   spaceBar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
   C = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.C);

  this.belowLayer = map.createStaticLayer("Capa de patrones 1", tileset, 0, 0);
  this.Layer = map.createStaticLayer("Capa de patrones 2", tileset, 0, 0);
  //const worldLayer = map.createStaticLayer("World", tileset, 0, 0);
  //const aboveLayer = map.createStaticLayer("Above Player", tileset, 0, 0);
	
  camera = this.cameras.main;
  	
  this.cursors = this.input.keyboard.createCursorKeys();
	
  var J = this.add.text(0, 0, "Puntos: ",{ 
			fontSize: '18px', 
			fill: '#000',
			align: 'center'
		});
	
  J.setScrollFactor(0, 0);

  var P = this.add.text(80, 0, Pun,{ 
			fontSize: '18px', 
			fill: '#000',
			align: 'center'
		});
	
  P.setScrollFactor(0, 0);
	
	var A = this.add.text(160, 0, "Vidas: ",{ 
			fontSize: '18px', 
			fill: '#000',
			align: 'center'
		});
	
  A.setScrollFactor(0, 0);

	var B = this.add.text(230, 0, vidas,{ 
			fontSize: '18px', 
			fill: '#000',
			align: 'center'
		});
	
  B.setScrollFactor(0, 0);

  this.belowLayer.setCollisionByProperty({ collides: true });
  this.Layer.setCollisionByProperty({ collides: true });
	
  pu = this.physics.add.group({
	  name: "puno",
	  key: 'Pu',
	  immovable: false,
	  allowGravity: true,
	  body: true,
	  setXY:{
		  x: 10,
		  y: 10
	  },
	  setVelocityX: 100,
	  setScale: { x: 0.5, y: 0.5}
  });
	
  this.physics.add.collider(pu, this.belowLayer);
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
	child[1].setPosition(120, 200);
	//child[2].setPosition(400, 400);
	//child[3].setVelocityY(-20);
	//console.log(child.length);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  bloques = this.physics.add.group({
	  name: "bloques",
	  key: 'blo',
	  quantity: 3,
	  immovable: true,
	  allowGravity: false,
	  body: true,
	  setxy:{
		  x: 10,
		  y: 10
	  }
  });
	
  var childBlo = bloques.getChildren();
  childBlo[1].setPosition(200, 100);
  childBlo[2].setPosition(100, 100);
	
  esc = this.physics.add.group({
	  name: "escalera",
	  key: 'Escal',
	  quantity: 5,
	  immovable: true,
	  allowGravity: false,
	  body: true,
	  setxy:{
		  x: 550,
		  y: 80
	  }
  });
	
  var childEsc = esc.getChildren();
  childEsc[1].setPosition(550, 96);
  childEsc[2].setPosition(550, 112);
  childEsc[3].setPosition(550, 118);
  childEsc[4].setPosition(550, 134);
	
  moneda = this.physics.add.group({
	  name: "moneda",
	  key: 'peso',
	  immovable: true,
	  allowGravity: false,
	  body: true,
	  setxy:{
		  x: 10,
		  y: 10
	  }
  });
	
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
  this.physics.add.collider(PoderAlas, this.Layer);
	
  Edi = this.physics.add.group({
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
  childCasa[1].setPosition(120, 153);	
	
  Catedral = this.physics.add.group({
		name: "Fin", 
		key: 'cate',
		immovable: true, 
		allowGravity: false, 
		body: true, 
		setXY: { x: 950, y: 160 }
		}
  );
	
	
  player = this.physics.add.sprite(250, 150, 'Maxio');
  player.setBounce(0.2);
	
	cantaro = this.physics.add.group({
		name: "Cantaro", 
		key: 'Can',
		quantity: 2,
		immovable: false, 
		allowGravity: true, 
		body: true
	});
	//enemigo.setVelocityX(100);
    this.physics.add.collider(cantaro, this.belowLayer);
	var childCan = cantaro.getChildren();
	childCan[0].setPosition(400, 200);
	childCan[1].setPosition(500, 200);
	
	this.physics.add.overlap(player, cantaro, function(player, cantaro){
		if(Caux == 0){
			InCantaro = 1;
			auxCant = cantaro;
			Caux = 1;
		}
	});

  this.physics.add.collider(player, this.belowLayer, function(){
	  if(InStair == 1){
	  	InStair = 0;
	  }
  });
	
  this.physics.add.collider(player, this.Layer);

  this.anims.create({
  		key: 'subiendo',
    	frames: this.anims.generateFrameNumbers('Ene', { start: 0, end: 0 }),
    	frameRate: 1,
    	repeat: -1
  });
	
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
	
	
  this.anims.create({
  		key: 'right',
    	frames: this.anims.generateFrameNumbers('MaxioRR', { start: 0, end: 1 }),
    	frameRate: 5,
    	repeat: -1
   });
	
   this.anims.create({
  		key: 'rightC',
    	frames: this.anims.generateFrameNumbers('MaxioCarD', { start: 0, end: 1 }),
    	frameRate: 4,
    	repeat: -1
   });
	
  this.anims.create({
  		key: 'left',
    	frames: this.anims.generateFrameNumbers('MaxioRL', { start: 0, end: 5 }),
    	frameRate: 5,
    	repeat: -1
   });
	
   this.anims.create({
  		key: 'leftC',
    	frames: this.anims.generateFrameNumbers('MaxioCarI', { start: 2, end: 1 }),
    	frameRate: 5,
    	repeat: -1
   });
	
   this.anims.create({
  		key: 'idle',
   		frames: this.anims.generateFrameNumbers('Maxio', { start: 0, end: 1 }),
    	frameRate: 2,
    	repeat: -1
   });
	
   this.anims.create({
  		key: 'idleC',
   		frames: this.anims.generateFrameNumbers('MaxioCarIdle', { start: 0, end: 1 }),
    	frameRate: 2,
    	repeat: -1
   });
		
   this.anims.create({
  		key: 'brinco',
   		frames: this.anims.generateFrameNumbers('MaxioJR', { start: 0, end: 1 }),
    	frameRate: 5,
    	repeat: 0
   });
	
   this.anims.create({
  		key: 'brincoI',
   		frames: this.anims.generateFrameNumbers('MaxioJL', { start: 1, end: 0 }),
    	frameRate: 5,
    	repeat: 0
   });
	
	this.anims.create({
  		key: 'ataque',
   		frames: this.anims.generateFrameNumbers('punetazo', { start: 1, end: 1 }),
    	frameRate: 3,
    	repeat: -1
   });
	
   alas = this.add.sprite(player.x - 10, player.y, 'ala');
   alas2 = this.add.sprite(player.x - 10, player.y, 'ala2');
	
	alas.visible = false;
	alas2.visible = false;
	
   this.cursors = this.input.keyboard.createCursorKeys();
   camera.startFollow(player);
   camera.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
	
   uno = bloques.create(160, 172, 'blo');
   unos = bloques.create(192, 172, 'blo');
	
   monedaU = moneda.create(160, 140, 'Mon');
   monedaD = moneda.create(192, 140, 'Mon');
	
   //enemigo2 = enemigo.create(352, 150, 'Ene')
	
   //enemigoU = enemigo.create(32, 32, 'Ene')
	
   monedaU.anims.play('Mone');
   monedaD.anims.play('Mone');
	
   child[0].anims.play('escor');
   child[1].anims.play('escor');
	
   this.physics.add.collider(player, Edi, function(player, Edi){
   		if(player.body.touching.down){
	    }
   })

	
   this.physics.add.overlap(player, pu, function(player, pu){
	   pu.destroy();
	   player.setTexture('Ne');
	   //saber(Poder);
	   Poder = true;
	   PoderA = false;
   })
	
	this.physics.add.overlap(player, PoderAlas, function(player, PoderAlas){
	   PoderAlas.destroy();
	   //saber(Poder);
	   PoderA = true;
	   Poder = false;
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
		
		if(enemigo.body.touching.left){
			if(Poder == true || PoderA == true){
				Poder = false;
				PoderA = false;
			}else{
				muerte = true;
			}
		}
		
		if(enemigo.body.touching.right){
			if(Poder == true || PoderA == true){
				Poder = false;
				PoderA = false;
			}else{
				muerte = true;
			}
		}
		
		if(Des == 1){
			enemigo.destroy();
		}
		
		//player.setVelocityX(Math.floor((Math.random() * 300) + 200));
   })
	
   this.physics.add.collider(player, bloques, function(player, bloques){
	   /*if(uno.body.touching.down){
	   		console.log("A");
		    uno.anims.stop();
	   		bloques.setTexture('bloUs');
		    pu = pu.create(160, 156 ,'Pu')
		    pu.setVelocityX(40);
		    pu.scaleX = 0.5;
		    pu.scaleY = 0.5;
	   }
	   if(unos.body.touching.down){
	   		console.log("B");
		    unos.anims.stop();
	   		bloques.setTexture('bloUs');
	   }*/
	   if(bloques.body.touching.down){
	   		bloques.setTexture('bloUs');
   	   }
   });
		
	this.physics.add.collider(enemigo, this.Layer, function(enem){
		rebote = rebote + 1;
		if(rebote%2 == 0){
			enem.setVelocityX(-100);
		}else{
			enem.setVelocityX(100);
		}
   });
	
}

update(time, delta) {
	fuera(this);
	Muer(this);
	cargar(auxCant);
	
	if(player.body.touching.none){
		InStair = 0;
		//player.anims.play('idle', true);
	}
	
	if(player.body.velocity.x == 0 && player.body.onFloor() || (player.body.velocity.x == 0 && player.body.touching.down == true)){
		if(CarCant == 0){
			player.anims.play('idle', true);
		}
		if(CarCant == 1){
			player.anims.play('idleC', true);
		}
	}
	
	if (this.cursors.left.isDown){
            player.setVelocityX(-160);
			if(player.body.onFloor()){
            	if(CarCant == 0){
					player.anims.play('left', true);
				}
				if(CarCant == 1){
					player.anims.play('leftC', true);				   
				}
			}
        }
        else if (this.cursors.right.isDown){
			player.setVelocityX(160);
			if(player.body.onFloor()){
				if(CarCant == 0){
					player.anims.play('right', true);
				}
				if(CarCant == 1){
				   	player.anims.play('rightC', true);
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
				//player.setGravityY(-300);
				player.setVelocityY(-160);
				//player.setGravityY(-700);
			}else{
				player.setVelocityY(-6);
			}
		}
	
        if ((this.cursors.up.isDown && player.body.onFloor()) || (this.cursors.up.isDown && player.body.touching.down == true))
        {
			player.setVelocityY(-180);
			if(player.body.velocity.x >= 0){
				player.anims.play('brinco', true);
			}
			else if(player.body.velocity.x == -160){
				player.anims.play('brincoI', true);
			}
        }
	
		if(this.cursors.down.isDown && InCantaro == 1){
			CarCant = 1;
		}
	
	if(player.x > 1000){
			IsN = 1;
	   	   this.scene.start("seleccion");
	   }
	if(Phaser.Input.Keyboard.JustDown(spaceBar)){
			console.log("ssssssssssss");
			if(Poder == true){
			player.anims.stop();
			player.anims.play('ataque', true);
	    	abc = this.add.existing(new Mone(this, player.x + 10, player.y + 10));
			this.physics.add.collider(abc, this.belowLayer);
			this.physics.add.collider(abc, this.Layer);
		
			this.physics.add.collider(abc, enemigo, function(player, ene){

				//enemigo.killAndHide(enemigo);
				ene.body.enable = false;
				ene.visible = false;
				abc.destroy();
		   	});
		}
	}
	if(spaceBar.isDown && PoderA == true){
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
	}
}
}