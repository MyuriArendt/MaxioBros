class FinNivel extends Phaser.Scene{
	constructor(){
		super("Periodico");
	}
	
	preload(){
		this.load.image('Pe', 'assets/perio.png');
	}
	
	create(){		
		this.cameras.main.fadeIn(2000);
		spaceBar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
		var Con = {
        	key: 'Pe',
        	x: 120,
			y: 120,
			//scale: 2
        };
		
		this.make.image(Con);
		
		 var L = this.add.text(128, 135, "Puntos: ",{ 
			fontSize: '10px', 
			fill: '#000',
			align: 'center'
		});
	

  		var K = this.add.text(188, 135, Pun,{ 
			fontSize: '10px', 
			fill: '#000',
			align: 'center'
		});
	}
	
	update(time, delta){
		if(spaceBar.isDown){
			console.log("ddd");
			this.scene.start("seleccion");
		}
	}
	
}