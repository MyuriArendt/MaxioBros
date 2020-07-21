class Ind extends Phaser.Scene{
	constructor(){
		super("seleccion");
	}
		
preload() {
	this.load.image("tile", "assets/mini_mapa.png");
  	this.load.tilemapTiledJSON("mape", "assets/MinM.json");
	this.load.spritesheet('masc', 'assets/MaxioChibi.png', { frameWidth: 16, frameHeight: 16 });
	this.load.spritesheet('Mine', 'assets/minerva-chibi.gif', { frameWidth: 16, frameHeight: 16 });
	this.load.spritesheet('Letra', 'assets/letrero.png', { frameWidth: 32, frameHeight: 16 });
	this.load.spritesheet('agave', 'assets/agave.png', { frameWidth: 16, frameHeight: 16 });
	this.load.spritesheet('rio', 'assets/lago.png', { frameWidth: 32, frameHeight: 16 });
	
	this.load.spritesheet('Esc', 'assets/escorpion.png', { frameWidth: 13, frameHeight: 8 });
	this.load.spritesheet('Gal', 'assets/gallo.png', { frameWidth: 16, frameHeight: 16 });
	this.load.spritesheet('Jagu', 'assets/jaguar.png', { frameWidth: 16, frameHeight: 16 });
		
	this.load.image('status', 'assets/status.png');
}
	
create() {
	//var player;
let camera;
var pu;
var P;
var Nivel;
var L;
var Riosito;
	
this.cameras.main.setBackgroundColor('#FFD133');
	
  const map = this.make.tilemap({ key: "mape" });

  const tile = map.addTilesetImage("mini_mapa", "tile");

  const belowLayer = map.createStaticLayer("Capa de patrones 1", tile, 0, 0);
  //const worldLayer = map.createStaticLayer("World", tileset, 0, 0);
  //const aboveLayer = map.createStaticLayer("Above Player", tileset, 0, 0);
	
  camera = this.cameras.main;
	
  this.cursors = this.input.keyboard.createCursorKeys();
	
	var barra = {
        	key: 'status',
        	x: 120,
			y: 224,
			//scale: 2
        };
	
	this.make.image(barra).setScrollFactor(0, 0);

  var Lago = this.physics.add.group({
	  key: 'rio',
	  quantity: 3,
	  immovable: false,
	  allowGravity: false,
	  body: true,
	  setXY:{
		  x: 10,
		  y: 10
	  },
	  visible: false
  });
	
	var childLago = Lago.getChildren();
	childLago[1].setPosition(209, 24);
	childLago[2].setPosition(58, 72);
	childLago[1].visible = true;
	childLago[2].visible = true;
	
  var Aga = this.physics.add.group({
	  key: 'agave',
	  quantity: 35,
	  immovable: false,
	  allowGravity: false,
	  body: true,
	  setXY:{
		  x: 10,
		  y: 10
	  },
	  visible: false
  });
	
	var Jagu = this.physics.add.group({
	  key: 'Jagu',
	  quantity: 2,
	  immovable: false,
	  allowGravity: false,
	  body: true,
	  setXY:{
		  x: 10,
		  y: 10
	  },
	  visible: false
  });
	
	var childJagu = Jagu.getChildren();
	childJagu[1].setPosition(232, 120);
	childJagu[1].visible = true;
	childJagu[1].flipX = true;;
	
	var Escor = this.physics.add.group({
	  key: 'Esc',
	  quantity: 2,
	  immovable: false,
	  allowGravity: false,
	  body: true,
	  setXY:{
		  x: 10,
		  y: 10
	  },
	  visible: false
  });
	
	var childEscor = Escor.getChildren();
	childEscor[1].setPosition(232, 88);
	childEscor[1].visible = true;
	childEscor[1].flipX = true;;
	
	var Gallo = this.physics.add.group({
	  key: 'Gal',
	  quantity: 2,
	  immovable: false,
	  allowGravity: false,
	  body: true,
	  setXY:{
		  x: 10,
		  y: 10
	  },
	  visible: false
  });
	
	var childGal = Gallo.getChildren();
	childGal[1].setPosition(200, 88);
	childGal[1].visible = true;;
	
	var childAga = Aga.getChildren();
	childAga[0].setPosition(24, 8);
	childAga[1].setPosition(40, 8);
	
	childAga[2].setPosition(24, 24);
	childAga[3].setPosition(40, 24);
	
	childAga[4].setPosition(152, 24);
	childAga[5].setPosition(168, 24);
	childAga[6].setPosition(184, 24);
	
	//childAga[21].setPosition(200, 24);
	//childAga[22].setPosition(216, 24);
	//childAga[23].setPosition(232, 24);
	
	childAga[24].setPosition(200, 8);
	childAga[25].setPosition(216, 8);
	childAga[26].setPosition(232, 8);
	
	childAga[7].setPosition(152, 40);
	childAga[8].setPosition(168, 24);
	childAga[9].setPosition(184, 40);
	
	childAga[10].setPosition(152, 8);
	childAga[11].setPosition(168, 8);
	childAga[12].setPosition(184, 8);
	
	childAga[27].setPosition(152, 88);
	childAga[28].setPosition(136, 88);
	childAga[29].setPosition(168, 88);
	childAga[30].setPosition(168, 104);
	childAga[31].setPosition(136, 104);
	childAga[32].setPosition(152, 104);
	
	childAga[13].setPosition(152, 120);
	childAga[14].setPosition(184, 120);
	childAga[15].setPosition(120, 120);
	childAga[16].setPosition(200, 120);
	
	childAga[17].setPosition(168, 152);
	childAga[18].setPosition(200, 152);
	childAga[19].setPosition(136, 152);
	childAga[20].setPosition(104, 152);
	
	var con;
	for(con = 0; con < 33; con++){
		childAga[con].visible = true;
	}
	
	this.anims.create({
  		key: 'rioB',
    	frames: this.anims.generateFrameNumbers('rio', { start: 0, end: 2 }),
    	frameRate: 4,
    	repeat: -1
  	});
	
	this.anims.create({
  		key: 'MiniMi',
    	frames: this.anims.generateFrameNumbers('masc', { start: 0, end: 1 }),
    	frameRate: 3,
    	repeat: -1
  	});
	
	this.anims.create({
  		key: 'baile',
    	frames: this.anims.generateFrameNumbers('agave', { start: 0, end: 3 }),
    	frameRate: 4,
    	repeat: -1
  	});
	
	this.anims.create({
  		key: 'AtaE',
    	frames: this.anims.generateFrameNumbers('Esc', { start: 0, end: 3 }),
    	frameRate: 2,
    	repeat: -1
  	});
	
	childEscor[1].anims.play('AtaE', true);
	
	this.anims.create({
  		key: 'AtaJ',
    	frames: this.anims.generateFrameNumbers('Jagu', { start: 3, end: 6 }),
    	frameRate: 2,
    	repeat: -1
  	});
	
	childJagu[1].anims.play('AtaJ', true);
	
	this.anims.create({
  		key: 'AtaG',
    	frames: this.anims.generateFrameNumbers('Gal', { start: 3, end: 6 }),
    	frameRate: 2,
    	repeat: -1
  	});
	
    childGal[1].anims.play('AtaG', true);
	
	for(con = 0; con < 33; con++){	
		childAga[con].anims.play('baile', true);
	}
	
	for(Riosito = 0; Riosito < 3; Riosito++){	
		childLago[Riosito].anims.play('rioB', true);
	}
	
  var J = this.add.text(5, 210, "Puntos - ",{ 
			fontSize: '10px', 
			//fill: '#000',
			align: 'center',
	  		color: '#FFFFFF'
		});
	
  var P = this.add.text(55, 210, Pun,{ 
			fontSize: '10px', 
			//fill: '#000',
			align: 'center',
	  	    color: '#FFFFFF'
		});
		
	var A = this.add.text(5, 221, "Vidas: ",{ 
			fontSize: '10px', 
			//fill: '#000',
			align: 'center',
	  	    color: '#FFFFFF'
		});

	var B = this.add.text(55, 221, vidas,{ 
			fontSize: '10px', 
			//fill: '#000',
			align: 'center',
	  	    color: '#FFFFFF'
		});
		
  Nivel = this.physics.add.group({
		name: "EnemigosA", 
		key: 'Mine',
		immovable: true, 
		allowGravity: false, 
		body: true, 
		setXY: { x: 72, y: 26 }
		}
  );
	
	
  belowLayer.setCollisionByProperty({ collides: true });

  player = this.physics.add.sprite(0, 56, 'masc');
  player.body.setAllowGravity(false);
	
  player.anims.play('MiniMi', true)

  this.physics.add.collider(player, belowLayer);
				
  this.cursors = this.input.keyboard.createCursorKeys();
  spaceBar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
	
  camera.startFollow(player);
  camera.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
  
  L = this.physics.add.group({
	  name: "Letrero",
	  key: 'Letra',
	  quantity: 5,
	  immovable: true,
	  allowGravity: false,
	  body: true,
	  setXY: { x: 500, y: 160 }
  });
	
  var childL = L.getChildren();
  childL[0].setPosition(90, 17);
	
  this.anims.create({
  		key: 'parpadeo',
   		frames: this.anims.generateFrameNumbers('Letra', { start: 0, end: 1 }),
    	frameRate: 3,
    	repeat: -1
   });
	
  childL[0].anims.play('parpadeo', true);
	
  this.physics.add.overlap(player, Nivel, function(){
	   N = 1;
	   console.log(N);
	   if(IsN == 0){
	   		player.body.immovable = true;
		  	player.body.moves = false;
	   }else{
		    player.body.immovable = false;
		  	player.body.moves = true;
	   }
   })
}
	
	update(time, delta){
		fuera(this);
		if (this.cursors.left.isDown){
				player.setVelocityX(-160);
			}else if(this.cursors.right.isDown){
				player.setVelocityX(160);
			}else if(this.cursors.up.isDown){
				player.setVelocityY(-160);
			}else if(this.cursors.down.isDown){
			    player.setVelocityY(160);
			}else if(Phaser.Input.Keyboard.JustDown(spaceBar)){
		    	console.log("sssss");
				if(N == 1){
					this.scene.start("Juego");
					InCantaro = 0;
					CarCant = 0;
					Caux = 0;
					auxCant = 0;
				}
		    }
		if(player. x > 200){
			InCantaro = 0;
					CarCant = 0;
					Caux = 0;
					auxCant = 0;
			//this.scene.start("Juego3");
		}
	}
}