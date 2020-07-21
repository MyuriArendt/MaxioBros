class GameOver extends Phaser.Scene{
	constructor(){
		super("Final");
		
	}
	
	preload(){
		//this.load.audio('A', 'assets/chi.ogg');
		this.load.image('P', 'assets/platano.png');
	}
	
	create(){
		//this.fondoU = this.sound.add('A');
		//this.fondoU.play();
		
		this.add.image(200, 200, 'P')
		
		var J = this.add.text(30, 0, "Perdiste",{ 
			fontSize: '25px', 
			fill: '#000',
			align: 'center',
			stroke: '#fff',
			strokeThickness: 2,
			fontStyle: 'bold italic'
		});
		
		var J = this.add.text(30, 25, "las vidas.",{ 
			fontSize: '25px', 
			fill: '#000',
			align: 'center',
			stroke: '#fff',
			strokeThickness: 2,
			fontStyle: 'bold italic'
		});
				
		const helloButton = this.add.text(5, 170, 'Volver a pantalla de titulo', { 
			fill: '#000',
			fontSize: '15px', 
			stroke: '#fff'

		});
		
    	helloButton.setInteractive();
	
		helloButton.on('pointerdown', () => { 
			vidas = 2;
    		this.scene.start("Iniciar");
		});
		
	}
}