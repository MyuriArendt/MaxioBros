class Juego2 extends Phaser.Scene{
	constructor(){
		super("Juego2");
	}
	
preload() {
	this.load.image("tiles", "assets/81122.png");
  	this.load.tilemapTiledJSON("map2", "assets/NivelC.json");
	this.load.spritesheet('iba', 'assets/IbaICamCom.png', { frameWidth: 21, frameHeight: 21 });
	this.load.spritesheet('ibaI', 'assets/IbaIdleCom.png', { frameWidth: 21, frameHeight: 21 });
	this.load.spritesheet('ibaIN', 'assets/IbaIdleComN.png', { frameWidth: 21, frameHeight: 21 });
	this.load.spritesheet('ibaIz', 'assets/IbaIzq.png', { frameWidth: 21, frameHeight: 21 });
	this.load.spritesheet('ibaB', 'assets/IbaIBrin.png', { frameWidth: 21, frameHeight: 21 });
	this.load.spritesheet('ibaBN', 'assets/IbaIBrinN.png', { frameWidth: 21, frameHeight: 21 });
	this.load.spritesheet('ibaBi', 'assets/image.png', { frameWidth: 21, frameHeight: 21 });
	this.load.spritesheet('ibaBiN', 'assets/imageN.png', { frameWidth: 21, frameHeight: 21 });
	this.load.spritesheet('blo', 'assets/bloque.png', { frameWidth: 16, frameHeight: 16 });
	this.load.spritesheet('bloUs', 'assets/bloqueUsado.png', { frameWidth: 16, frameHeight: 16 });
	this.load.spritesheet('Ne', 'assets/PeloNegro.png', { frameWidth: 21, frameHeight: 21 });
	this.load.spritesheet('NeI', 'assets/PeloNegroI.png', { frameWidth: 21, frameHeight: 21 });
	this.load.spritesheet('Pu', 'assets/Punch.png', { frameWidth: 32, frameHeight: 32 });
	this.load.spritesheet('Mon', 'assets/mon.png', { frameWidth: 18, frameHeight: 18 });
	this.load.spritesheet('Ene', 'assets/Enemy.png', { frameWidth: 16, frameHeight: 16 });
}
	
create() {
	console.log("s");
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
var enemigo;
var enemigoU;
	
  const mapa = this.make.tilemap({ key: "map2" });

  const tileset = mapa.addTilesetImage("81122", "tiles");

  // Parameters: layer name (or index) from Tiled, tileset, x, y
  const belowLayer = mapa.createStaticLayer("Capa de patrones 1", tileset, 0, 0);
  //const worldLayer = map.createStaticLayer("World", tileset, 0, 0);
  //const aboveLayer = map.createStaticLayer("Above Player", tileset, 0, 0);
	
  camera = this.cameras.main;
	
  this.cursors = this.input.keyboard.createCursorKeys();
	
	var J = this.add.text(0, 0, "Puntos: ",{ 
			fontSize: '18px', 
			fill: '#000',
			align: 'center'
		});
	
	       // let arc1 = this.add.arc(60, 140, 20, 270, 90, true, 0xFF00FF, 1);
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
	
	       // let arc1 = this.add.arc(60, 140, 20, 270, 90, true, 0xFF00FF, 1);
  A.setScrollFactor(0, 0);

	var B = this.add.text(230, 0, vidas,{ 
			fontSize: '18px', 
			fill: '#000',
			align: 'center'
		});
	
  B.setScrollFactor(0, 0);

  /*controls = new Phaser.Cameras.Controls.FixedKeyControl({
    camera: camera,
    left: cursors.left,
    right: cursors.right,
    up: cursors.up,
    down: cursors.down,
    speed: 0.5
  });*/


  /*controls = new Phaser.Cameras.Controls.FixedKeyControl({
    camera: camera,
    left: cursors.left,
    right: cursors.right,
    up: cursors.up,
    down: cursors.down,
    speed: 0.5
  });*/

  belowLayer.setCollisionByProperty({ collides: true });

  /*const debugGraphics = this.add.graphics().setAlpha(0.75);
  belowLayer.renderDebug(debugGraphics, {
  tileColor: null, // Color of non-colliding tiles
  collidingTileColor: new Phaser.Display.Color(243, 134, 48, 255), // Color of colliding tiles
  faceColor: new Phaser.Display.Color(40, 39, 37, 255) // Color of colliding face edges
  });*/
	
  player = this.physics.add.sprite(100, 576, 'iba');
  player.setBounce(0.2);
  //player.setCollideWorldBounds(true);
  this.physics.add.collider(player, belowLayer);
	
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
	
  this.physics.add.collider(pu, belowLayer);
	
	enemigo = this.physics.add.group({
	name: "E",
	  key: 'Ene',
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
	
  this.physics.add.collider(enemigo, belowLayer);
	
  bloques = this.physics.add.group({
	  name: "bloques",
	  key: 'blo',
	  immovable: true,
	  allowGravity: false,
	  body: true,
	  setxy:{
		  x: 10,
		  y: 10
	  }
  });
	
  moneda = this.physics.add.group({
	  name: "moneda",
	  key: 'Mon',
	  immovable: true,
	  allowGravity: false,
	  body: true,
	  setxy:{
		  x: 10,
		  y: 10
	  }
  });
	
  this.anims.create({
  		key: 'Mone',
    	frames: this.anims.generateFrameNumbers('Mon', { start: 0, end: 3 }),
    	frameRate: 10,
    	repeat: -1
  });
	
	
  this.anims.create({
  		key: 'right',
    	frames: this.anims.generateFrameNumbers('iba', { start: 0, end: 5 }),
    	frameRate: 10,
    	repeat: -1
   });
	
   this.anims.create({
  		key: 'rightN',
    	frames: this.anims.generateFrameNumbers('Ne', { start: 0, end: 5 }),
    	frameRate: 10,
    	repeat: -1
   });
	
  this.anims.create({
  		key: 'left',
    	frames: this.anims.generateFrameNumbers('ibaIz', { start: 0, end: 5 }),
    	frameRate: 10,
    	repeat: -1
   });
	
	this.anims.create({
  		key: 'leftI',
    	frames: this.anims.generateFrameNumbers('NeI', { start: 0, end: 5 }),
    	frameRate: 10,
    	repeat: -1
   });
	
   this.anims.create({
  		key: 'idle',
   		frames: this.anims.generateFrameNumbers('ibaI', { start: 0, end: 3 }),
    	frameRate: 5,
    	repeat: -1
   });
	
   this.anims.create({
  		key: 'idleN',
   		frames: this.anims.generateFrameNumbers('ibaIN', { start: 0, end: 3 }),
    	frameRate: 5,
    	repeat: -1
   });
	
   this.anims.create({
  		key: 'brinco',
   		frames: this.anims.generateFrameNumbers('ibaB', { start: 0, end: 1 }),
    	frameRate: 10,
    	repeat: -1
   });
	
	this.anims.create({
  		key: 'brincoN',
   		frames: this.anims.generateFrameNumbers('ibaBN', { start: 0, end: 1 }),
    	frameRate: 10,
    	repeat: -1
   });
	
   this.anims.create({
  		key: 'brincoI',
   		frames: this.anims.generateFrameNumbers('ibaBi', { start: 0, end: 1 }),
    	frameRate: 1,
    	repeat: -1
   });
	
	this.anims.create({
  		key: 'brincoIN',
   		frames: this.anims.generateFrameNumbers('ibaBiN', { start: 0, end: 1 }),
    	frameRate: 1,
    	repeat: -1
   });
	
   this.anims.create({
  		key: 'brillo',
   		frames: this.anims.generateFrameNumbers('blo', { start: 0, end: 3 }),
    	frameRate: 3,
    	repeat: -1
   });
	
   this.cursors = this.input.keyboard.createCursorKeys();
   camera.startFollow(player);
   camera.setBounds(0, 0, mapa.widthInPixels, mapa.heightInPixels);
	
   uno = bloques.create(160, 576, 'blo');
   unos = bloques.create(192, 172, 'blo');
	
   monedaU = moneda.create(160, 140, 'Mon');
   monedaD = moneda.create(192, 140, 'Mon');
	
   enemigoU = enemigo.create(32, 32, 'Ene')
	
   monedaU.anims.play('Mone');
   monedaD.anims.play('Mone');
	
   uno.anims.play('brillo');
   unos.anims.play('brillo');
	
	
	
   this.physics.add.overlap(player, pu, function(player, pu){
	   console.log("ddd");
	   pu.destroy();
	   player.setTexture('Ne');
	   //saber(Poder);
	   Poder = 0;
   })
	
	this.physics.add.overlap(player, moneda, function(player, moneda){
	   console.log("ddd");
	   Pun = Pun + 1;
	   P.setText(Pun);
	   moneda.destroy();
   })
	
	this.physics.add.overlap(player, enemigo, function(player, moneda){
	   console.log("ddd");
		Poder = Poder + 1;
   })
	
   this.physics.add.collider(player, bloques, function(player, bloques){
	   if(uno.body.touching.down){
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
	   }
   });
}

update(time, delta) {
	fuera(this);
	Muer(this);
	//console.log(Poder);
  // Runs once per frame for the duration of the scene
	//controls.update(delta);
	//bloques.anims.play('brillo', true);
	
	//console.log(player.x);
	if((player.body.velocity.x == 0 && player.body.onFloor()) || (player.body.velocity.x == 0 && player.body.touching.down == true)){
			if(Poder != 0){
	   			player.anims.play('idle', true);
			}
			if(Poder == 0){
				player.anims.play('idleN', true);
			}
	   }
	if (this.cursors.left.isDown)
        {
            player.setVelocityX(-160);
			if(player.body.onFloor()){
				if(Poder != 0){
            		player.anims.play('left', true);
				}
				if(Poder == 0){
					player.anims.play('leftI', true);
				}
			}
        }
        else if (this.cursors.right.isDown)
        {
			if(Poder != 0){
            player.setVelocityX(160);
			if(player.body.onFloor()){
            	player.anims.play('right', true);
			}
			}
			if(Poder == 0){
				
				player.setVelocityX(160);
			if(player.body.onFloor()){
            	player.anims.play('rightN', true);
			}
				
				
			}
        }
        else
        {
            player.setVelocityX(0);
            //player.anims.play('turn');
        }

        if ((this.cursors.up.isDown && player.body.onFloor()) || (this.cursors.up.isDown && player.body.touching.down == true))
        {
            player.setVelocityY(-300);
			if(player.body.velocity.x > 0.01){
				if(Poder != 0){
					player.anims.play('brinco', true);
				}
				if(Poder == 0){
					player.anims.play('brincoN', true);
				}
				
			}
			if(player.body.velocity.x < 0.01){
				if(Poder != 0){
					player.anims.play('brincoI', true);
				}
				if(Poder == 0){
					player.anims.play('brincoIN', true);
				}
			}
        }
	
		if(player.body.touching.up == true){
			//bonus();
		}
	
		if(player.body.touching.down == true){
			//bonus();
		}
	if(Poder == 20){
		   this.scene.start("Over");
	}
}

	//function bonus(){
		//console.log("+1");
		//uno.anims.stop('brillo');
		//uno.setTexture('bloUs');
	//}
}
