class Puntos extends Phaser.Scene{
	constructor(){
		super("op3");
	}
		
preload() {
	this.load.image("tiles", "assets/81122.png");
  	this.load.tilemapTiledJSON("mapea", "assets/Campo.json");
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
	this.load.spritesheet('D', 'assets/door.png', { frameWidth: 16, frameHeight: 32 });
	this.load.spritesheet('Escudo', 'assets/Shield.png', { frameWidth: 21, frameHeight: 21 });
}
	
create() {
	//var player;
//cursors;
//let camera;
var bloques;
var uno;
var unos;
var pu;
var moneda;
var monedaU;
var monedaD;
//var Poder = 1;
var P;
var puerta;
	
  this.socket = io();
	

  const map = this.make.tilemap({ key: "mapea" });

  const tileset = map.addTilesetImage("81122", "tiles");

  // Parameters: layer name (or index) from Tiled, tileset, x, y
  const belowLayer = map.createStaticLayer("Capa de patrones 1", tileset, 0, 0);
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

  belowLayer.setCollisionByProperty({ collides: true });

  /*const debugGraphics = this.add.graphics().setAlpha(0.75);
  belowLayer.renderDebug(debugGraphics, {
  tileColor: null, // Color of non-colliding tiles
  collidingTileColor: new Phaser.Display.Color(243, 134, 48, 255), // Color of colliding tiles
  faceColor: new Phaser.Display.Color(40, 39, 37, 255) // Color of colliding face edges
  });*/
	
 
	
  puerta = this.physics.add.group({
	  name: "doo",
	  key: 'D',
	  immovable: false,
	  allowGravity: false,
	  body: true,
	  setXY:{
		  x: 32,
		  y: 144
	  },
  });
	
  this.physics.add.collider(puerta, belowLayer);
	
	enemigo = this.physics.add.group({
		name: "EnemigosA", 
		key: 'Escudo',
		quantity: 1,
		immovable: false, 
		allowGravity: true, 
		body: true, 
		setXY: { x: 100, y: 100, stepX: 52 },
		velocityX: 25
		}
	);
	//enemigo.setVelocityX(100);
    this.physics.add.collider(enemigo, belowLayer);
	child = enemigo.getChildren();
	
	 //player = this.physics.add.sprite(100, 150, 'iba');
  //player.setBounce(0.2);
  //player.setCollideWorldBounds(true, false, false, false);
  //this.physics.add.collider(player, belowLayer);
	
	var pueU = puerta.create(112, 112, 'D');
	
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
	
   this.cursors = this.input.keyboard.createCursorKeys();
   spaceBar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
	
   	
		
   /*this.physics.add.overlap(player, puerta, function(player, pu){
	   EnP = 1;
   })
	
	this.physics.add.overlap(player, pueU, function(player, pu){
	   EnP = 2;
   })*/
	
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
  var self = this;
  this.otherPlayers = this.physics.add.group();
  this.socket.on('currentPlayers', function (player) {
    Object.keys(player).forEach(function (id) {
      if (player[id].playerId === self.socket.id) {
        addPlayer(self, player[id]);
		self.physics.add.collider(self.Jugador, belowLayer);
		  self.physics.add.collider(self.Jugador,enemigo, function(a, b){
	   		console.log("ddd");
			   if(b.body.touching.up){
					a.setVelocityY(-300);
				    b.body.enable = false;
				    b.visible = false;
					//Des = 1;
					//Pun = Pun + 100;
					//P.setText(Pun);
					//enemigo2.destroy();
				}
		});
		
      } else {
        addOtherPlayers(self, player[id]);
		self.physics.add.collider(self.otherPlayers, belowLayer);
		self.physics.add.collider(self.otherPlayers, enemigo);
      }
    });
  });
  this.socket.on('newPlayer', function (playerInfo) {
    addOtherPlayers(self, playerInfo);
	self.physics.add.collider(self.otherPlayers, belowLayer);
	self.physics.add.collider(self.otherPlayers, enemigo);
  });
  this.socket.on('disconnect', function (playerId) {
    self.otherPlayers.getChildren().forEach(function (otherPlayer) {
      if (playerId === otherPlayer.playerId) {
        otherPlayer.destroy();
      }
    });
  });
	
	this.socket.on('playerMoved', function (playerInfo) {
  self.otherPlayers.getChildren().forEach(function (otherPlayer) {
    if (playerInfo.playerId === otherPlayer.playerId) {
      otherPlayer.setPosition(playerInfo.x, playerInfo.y);
    }
  });
});
	
this.socket.on('starLocation', function (starLocation) {
  if (self.star) self.star.destroy();
  self.star = self.physics.add.image(starLocation.x, starLocation.y, 'Escudo');
  self.star.setVelocityX(50);
  self.physics.add.collider(self.star, belowLayer);
  self.physics.add.collider(self.Jugador, self.star, function () {
	if(self.star.body.touching.up){
		self.Jugador.setVelocityY(-300);
    	this.socket.emit('starCollected');
  	}
	  if(self.star.body.touching.left){
			//self.Jugador.visible = false;
			//self.Jugador.body.enable = false;
		  	self.Jugador.x = 336;
		  	self.Jugador.y = 32;
		}
		
		if(self.star.body.touching.right){
			//self.Jugador.visible = false;
			//self.Jugador.body.enable = false;
			self.Jugador.x = 336;
		  	self.Jugador.y = 32;
		}
  }, null, self);
});
	
	
var C = this.add.text(304, 0, 'Perdedores',{ 
			fontSize: '18px', 
			fill: '#000',
			align: 'center'
		});
	
	
//////////////////////////////////////////////////////////////////////////////////////////////////////////////		  self.physics.add.collider(self.Jugador, belowLayer);
	camera.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
	var M = this.ganar = this.add.text(0, 16, '', { 
		fontSize: '15px', 
		fill: '#0000FF' 
	});
	
	this.socket.on('scoreUpdate', function (a) {
  		self.ganar.setText('Gano: ' + a);
	});
	
	  M.setScrollFactor(0, 0);
	
	var Q = this.nomb = this.add.text(0, 32, '', { 
		fontSize: '15px', 
		fill: '#0000FF' 
	});
	
	this.socket.on('Identidad', function (a) {
  		self.nomb.setText('Eres: ' + a);
	});
	
	  Q.setScrollFactor(0, 0);
	
	var Ma = this.Mac = this.add.text(0, 60, '', { fontSize: '15px', fill: '#0000FF' });
	Ma.setScrollFactor(0, 0);
	var AD = this.Anti = this.add.text(0, 75, '', { fontSize: '15px', fill: '#FF0000' });
    AD.setScrollFactor(0, 0);

	this.socket.on('puntos', function (scores) {
	  self.Mac.setText('Macarrones: ' + scores.macarron);
	  self.Anti.setText('Antidulces: ' + scores.anti_dulces);
	});
	
	this.socket.on('colecUbic', function (ubi) {
	  if (self.colec) self.colec.destroy();
	  self.colec = self.physics.add.image(ubi.x, ubi.y, 'Mon');
	  self.physics.add.overlap(self.Jugador, self.colec, function () {
		this.socket.emit('colecColect');
	  }, null, self);
	  self.physics.add.collider(self.colec, belowLayer);
			  self.colec.body.setAllowGravity(false);
	});
}
	


update(time, delta) {
	//fuera(this);
	//console.log(player.x);
	//console.log(EnP);
	//console.log(Poder);
  // Runs once per frame for the duration of the scene
	//controls.update(delta);
	//bloques.anims.play('brillo', true);

	//console.log(player.x);
	
	if(this.Jugador){
		camera.startFollow(this.Jugador);
		
		if(this.Jugador.x > 688){
			console.log("win")
		}
		
		
		//////////////////////////////////////////////////////////////////////
		var x = this.Jugador.x;
		var y = this.Jugador.y;
		if (this.Jugador.oldPosition && (x !== this.Jugador.oldPosition.x || y !== this.Jugador.oldPosition.y)) {
		  this.socket.emit('playerMovement', { x: this.Jugador.x, y: this.Jugador.y });
		}

		// save old position data
		this.Jugador.oldPosition = {
		  x: this.Jugador.x,
		  y: this.Jugador.y,
		};
		////////////////////////////////////////////////////////////////////////////////////////////
		if (this.Jugador.x > 688) {
		  this.socket.emit('Ganador');
		}
		/////////////////////////////////////////////////////////////////////////////////////////
		
		
	if((this.Jugador.body.velocity.x == 0 && this.Jugador.body.onFloor()) || (this.Jugador.body.velocity.x == 0 && this.Jugador.body.touching.down == true)){
			//if(Poder != 0){
	   			this.Jugador.anims.play('idle', true);
			//}
			//if(Poder == 0){
			//	player.anims.play('idleN', true);
			//}
	   }
	if (this.cursors.left.isDown)
        {
			/////////////////////
			this.Jugador.setVelocityX(-160);
			/////////////////////
            //player.setVelocityX(-160);
			if(this.Jugador.body.onFloor()){
				//if(Poder != 0){
            		//this.Jugador.anims.play('left', true);
				//}
				//if(Poder == 0){
					//player.anims.play('leftI', true);
				//}
			}
        }
        else if (this.cursors.right.isDown)
        {
			/////////////////////
			this.Jugador.setVelocityX(160);
			/////////////////////
			//if(Poder != 0){
            //player.setVelocityX(160);
			if(this.Jugador.body.onFloor()){
            	this.Jugador.anims.play('right', true);
			}
			//}
			//if(Poder == 0){
				
				//player.setVelocityX(160);
			//if(player.body.onFloor()){
            	//player.anims.play('rightN', true);
			//}
				
				
			//}
        }
        else
        {
            //player.setVelocityX(0);
			/////////////////////
			this.Jugador.setVelocityX(0);
			/////////////////////
            //player.anims.play('turn');
        }

        if ((this.cursors.up.isDown && this.Jugador.body.onFloor()) || (this.cursors.up.isDown && this.Jugador.body.touching.down == true))
        {
            //player.setVelocityY(-300);
            this.Jugador.setVelocityY(-350);
			if(this.Jugador.body.velocity.x > 0.01){
				//if(Poder != 0){
					this.Jugador.anims.play('brinco', true);
				//}
				//if(Poder == 0){
					//player.anims.play('brincoN', true);
				//}
				
			}
			if(this.Jugador.body.velocity.x < 0.01){
				//if(Poder != 0){
					this.Jugador.anims.play('brincoI', true);
				//}
				//if(Poder == 0){
					//player.anims.play('brincoIN', true);
				//}
			}
        }
	
		/*if(player.body.touching.up == true){
			//bonus();
		}
	
		if(player.body.touching.down == true){
			//bonus();
		}*/
	//console.log("x: " + this.player.x);
	//console.log("y: " + this.player.y);

	if(spaceBar.isDown){
		if(EnP == 1 || EnP == 2){
			entrar(this);
		}
	}
		//console.log("d");

}

	//function bonus(){
		//console.log("+1");
		//uno.anims.stop('brillo');
		//uno.setTexture('bloUs');
	//}
}
}

function addPlayer(self, playerInfo) {
	self.Jugador = self.physics.add.sprite(playerInfo.x, playerInfo.y, 'ibaI');
	//self.Jugador.body = true;
	//self.Jugador.setDrag(100);
  	//self.Jugador.setAngularDrag(100);
  	//self.Jugador.setMaxVelocity(200);
	
	//self.Jugador = this.physics.add.sprite(playerInfo.x, playerInfo.y, 'iba').setOrigin(0.5, 0.5).setDisplaySize(53, 40);;
  	//player.setBounce(0.2);
  	//player.setCollideWorldBounds(true, false, false, false);
  	//this.physics.add.collider(self.Jugador, belowLayer);
}

function addOtherPlayers(self, playerInfo, L) {
  const otherPlayer = self.physics.add.sprite(playerInfo.x, playerInfo.y, 'Ene');

  otherPlayer.playerId = playerInfo.playerId;
  self.otherPlayers.add(otherPlayer);
}