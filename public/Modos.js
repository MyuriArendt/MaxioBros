class Modos extends Phaser.Scene{
	constructor(){
		super("ModJue");
		
	}
	
	preload(){
		//this.load.audio('J', 'assets/Jojo.mp3');
	}
	
	create(){
		//this.fondo = this.sound.add('J');
		//this.fondo.play();
		
		/*this.add.text(0, 0, "Carrera",{ 
			fontSize: '35px', 
			fill: '#000',
			//align: 'center'
		});
		
		this.add.text(0, 35, "Puntos",{ 
			fontSize: '35px', 
			fill: '#000',
			//align: 'center'
		});*/
		
		//this.J = this.add.text(100, 170, "Jugar",{ fontSize: '25px', fill: '#000' });
		
		const carrera = this.add.text(0, 0, 'Carrera', { fill: '#000' });
    	carrera.setInteractive();
		
		carrera.on('pointerdown', () => { 
			modoJ = 1;
    		this.scene.start("op2");
		});
		
		const puntos = this.add.text(0, 35, 'Puntos', { fill: '#000' });
    	puntos.setInteractive();
		
		puntos.on('pointerdown', () => {
			modoJ = 2;
    		this.scene.start("op2");
		});

	}
	
}