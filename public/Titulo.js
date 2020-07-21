class Titulo extends Phaser.Scene{
	constructor(){
		super("Iniciar");
		
	}
	
	preload(){
		this.load.audio('J', 'assets/Jojo.mp3');
		this.load.image('Titulo', 'assets/PORTADAV2.png');
		this.load.spritesheet('Max', 'assets/johnnyP.png', { frameWidth: 112, frameHeight: 96 });
		this.load.spritesheet('Nahual', 'assets/jaguaresP.png', { frameWidth: 96, frameHeight: 64 });
	}
	
	create(){
		
		var a = 0;
		
		this.cameras.main.fadeIn(5000);

		spaceBar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
		this.fondo = this.sound.add('J');
		this.fondo.play();
		
		var configT = {
        	key: 'Titulo',
        	x: 120,
			y: 120,
			//scale: 2
        };
		
		this.make.image(configT);
		
		var M = this.physics.add.group({
			//name: "EnemigosA", 
			key: "Max",
			quantity: 2,
			immovable: true, 
			allowGravity: false, 
			body: true, 
			setXY: { x: 160, y: 135 },
			visible: false
			}
		);
		
		var childM = M.getChildren();
  		childM[1].setPosition(160, 135);
		
		var N = this.physics.add.group({
			//name: "EnemigosA", 
			key: "Nahual",
			quantity: 2,
			immovable: true, 
			allowGravity: false, 
			body: true, 
			setXY: { x: 160, y: 160 },
			visible: false
			}
		);
		
		var childN = N.getChildren();
  		childN[1].setPosition(48, 210);
		
		this.anims.create({
  			key: 'V',
    		frames: this.anims.generateFrameNumbers('Max', { start: 0, end: 3 }),
    		frameRate: 4,
    		repeat: -1
   		});
		
		this.anims.create({
  			key: 'R',
    		frames: this.anims.generateFrameNumbers('Nahual', { start: 0, end: 3 }),
    		frameRate: 4,
    		repeat: -1
   		});
	    
		childM[1].visible = true;
		childM[1].anims.play('V', true);
		
		childN[1].visible = true;
		childN[1].anims.play('R', true);
		
		
		/*var J = this.add.text(100, 100, "Super",{ 
			fontSize: '25px', 
			fill: '#000',
			align: 'center'
		});
		
		this.add.text(30, 123, "Ibaraki Bros",{ 
			fontSize: '25px', 
			fill: '#000',
			align: 'center'
		});*/
		
		//this.J = this.add.text(100, 170, "Jugar",{ fontSize: '25px', fill: '#000' });
		
		/*const helloButton = this.add.text(150, 170, 'Jugar', { fill: '#000' });
    	helloButton.setInteractive();
		
		helloButton.on('pointerover', () => { 
			console.log('pointerover'); 
		});
		
		helloButton.on('pointerdown', () => { 
    		this.scene.start("seleccion");
			this.fondo.stop();
		});*/
	}
	
	update(time, delta){
		if(spaceBar.isDown){
			//this.cameras.main.once('camerafadeincomplete', function (camera) {
        	//camera.fadeOut(6000);
    		//});
			//this.cameras.main.fadeOut(5000);
		    //this.cameras.main.fadeOut(5000);
			//setTimeout(() => {
				this.scene.start("seleccion");
		    	this.fondo.stop();
			//}, 5000);
		}
		
	}
}