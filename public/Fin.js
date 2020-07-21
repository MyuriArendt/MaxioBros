class Fin extends Phaser.Scene{
	constructor(){
		super("Over");
		
	}
	
	create(){
		var J = this.add.text(100, 100, "Perdiste",{ 
			fontSize: '25px', 
			fill: '#000',
			align: 'center'
		});
				
		const helloButton = this.add.text(100, 170, 'Reintentar', { 
			fill: '#000',
			fontSize: '15px'
		});
    	helloButton.setInteractive();
	
		helloButton.on('pointerdown', () => { 
    		this.scene.start("Juego");
		});
		
	}
}